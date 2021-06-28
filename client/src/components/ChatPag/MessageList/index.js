import React, { useEffect, useState, useRef } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ReactScrollableFeed from 'react-scrollable-feed';
import { animateScroll } from "react-scroll";
import './MessageList.css';

import getSocketInstance from '../../socket'
const socket = getSocketInstance()

// socket.on('received-message', data => {
//   console.log(data);
// })

const cookies = new Cookies();

export default class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.handleSend = this.handleSend.bind(this);
		this.updateMess = this.props.updateMess;
		this.state = {
			user: cookies.get('user'),
			loadPage: props.loadPage,
			messages: props.messages,
			currentUser: props.currentUser,
			buttonSend: false,
			messageReceive: {}
		}
		this.myRef = React.createRef()
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('load message-list should update', this.props.loadPage)
		if ((this.props.loadPage == true)
			|| (this.state.buttonSend == true))
			return true
		else return false
	}

	shouldcomponentDidMount() {
		if (this.props.loadPage == true) return true;
		else return false;
	}

	componentDidMount = async () => {
		console.log('load message list did mount')
		if (this.myRef) {
			this.myRef.current.addEventListener('DOMNodeInserted', event => {
				const { currentTarget: target } = event;
				target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
			});
		}
		socket.on('received-message', message => {

			console.log(message, message.fromEmail);
			this.setState({ messageReceive: message.content })
			if (message.fromEmail === cookies.get('currentUser')) {
				this.props.updateMessReceive(message.content)
				console.log('message receive true')
			} else {
				console.log('message receive false')

			}
		})
	}

	componentDidUpdate = () => {
		console.log('load message list did update ')
		this.renderMessages();
		this.setState({ buttonSend: false })
		console.log('temppp', this.myRef.current.scrollTop)


		socket.on('received-message', message => {
			this.props.setLoadPage(true);
		})

	}

	componentWillMount() {
		console.log('load message list will mount', this.props.messages)
	}

	handleSend = async (e) => {
		console.log('handesent', this.state.buttonSend)
		this.setState({ buttonSend: true })
		if (e !== '') {
			const message = {
				fromEmail: cookies.get('user'),
				toEmail: cookies.get('currentUser'),
				content: e,
				contentType: 'text',
				sentTime: ''
			}
			console.log("Client: message send: " + JSON.stringify(message));
			await axios.post("http://localhost:8000/sendmessage", message)
				.then(response => {
					if (response.status === 200) { }
					console.log('res', response)
				})
				.catch(error => {
					console.log(error);
				});
			this.props.updateMess(e)
			this.props.setLoadPage(true);
		}
	}

	renderMessages = () => {
		console.log('render mess')
		let i = 0;
		let messageCount = this.props.messages.length;
		let tempMessages = [];

		while (i < messageCount) {
			let previous = this.props.messages[i - 1];
			let current = this.props.messages[i];
			let next = this.props.messages[i + 1];
			let isMine = (current.author === this.state.user);
			let currentMoment = moment(current.timestamp);
			let prevBySameAuthor = false;
			let nextBySameAuthor = false;
			let startsSequence = true;
			let endsSequence = true;
			let showTimestamp = true;

			if (previous) {
				let previousMoment = moment(previous.timestamp);
				let previousDuration = moment.duration(currentMoment.diff(previousMoment));
				prevBySameAuthor = previous.author === current.author;

				if (prevBySameAuthor && previousDuration.as('hours') < 1) {
					startsSequence = false;
				}

				if (previousDuration.as('hours') < 1) {
					showTimestamp = false;
				}
			}

			if (next) {
				let nextMoment = moment(next.timestamp);
				let nextDuration = moment.duration(nextMoment.diff(currentMoment));
				nextBySameAuthor = next.author === current.author;

				if (nextBySameAuthor && nextDuration.as('hours') < 1) {
					endsSequence = false;
				}
			}

			tempMessages.push(
				<Message
					key={i}
					isMine={isMine}
					startsSequence={startsSequence}
					endsSequence={endsSequence}
					showTimestamp={showTimestamp}
					data={current}
				/>
			);

			// Proceed to the next message.
			i += 1;
		}
		return tempMessages;
	}

	render() {
		console.log('load message list', this.state.messages)
		return (
			<div className="message-list">
				<div className="toolbar">
					<Toolbar
						title={cookies.get('currentUserFullname')}
						rightItems={[
							<ToolbarButton key="video" icon="video-player" />,
							<ToolbarButton key="phone" icon="phone-call" />
						]}
					/>
				</div>

				<div className="message-list-container"
					ref={this.myRef}
				>{this.renderMessages()}

				</div>

				<Compose
					rightItems={[
						<ToolbarButton key="emoji" icon="send2" id="send2" />
					]}
					loadPage={this.props.loadPage}
					handleSend={this.handleSend}

				/>
			</div>
		);
	}
}