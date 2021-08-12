import React  from 'react';
import axios from 'axios';
import moment from 'moment';
import { Cookies } from 'react-cookie';

import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import getSocketInstance from '../../socket';
import './MessageList.css';

import getServerHost from '../../serverHost';
const serverHost = getServerHost();

const socket = getSocketInstance()
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
		};
		this.myRef = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if ((this.props.loadPage === true)
			|| (this.state.buttonSend === true))
			return true;
		else return false;
	}

	shouldcomponentDidMount() {
		if (this.props.loadPage === true) return true;
		else return false;
	}

	componentDidMount = async () => {
		if (this.myRef) {
			this.myRef.current.addEventListener('DOMNodeInserted', event => {
				const { currentTarget: target } = event;
				target.scroll({ DelayNode: 1000, top: target.scrollHeight, behavior: 'smooth' });
			});
		}
		socket.on('received-message', message => {
			this.setState({ messageReceive: message.content })
			if ((message.fromEmail === cookies.get('currentUser'))
				&& (message.contentType == 'text')) {
				this.props.updateMessReceive(message.contentType, message.content);
			} else if ((message.fromEmail === cookies.get('currentUser'))
				&& (message.contentType === 'image')) {
				this.props.updateMessReceive(message.contentType, message.image);
			} else {
				console.log('message receive false');
			}
		})
	}

	componentDidUpdate = () => {
		this.renderMessages();
		this.setState({ buttonSend: false });
		socket.on('received-message', message => {
			this.props.setLoadPage(true);
		})
	}

	handleSend = async (text, image) => {
		document.querySelector('.open-image').style.display = 'none';
		this.setState({ buttonSend: true });
		if (image !== '') {
			let message = {
				fromEmail: cookies.get('user'),
				toEmail: cookies.get('currentUser'),
				image: image,
				contentType: 'image',
				sentTime: ''
			};
			await axios.post(serverHost+"/sendmessage", message)
				.then(response => {
					if (response.status === 200) {

					}
				})
				.catch(error => {
					console.log(error);
				});
			this.props.updateMess('image', image);
			this.props.setLoadPage(true);
		}
		else if (text !== '') {
			let message = {
				fromEmail: cookies.get('user'),
				toEmail: cookies.get('currentUser'),
				content: text,
				contentType: 'text',
				sentTime: ''
			};
			await axios.post(serverHost+"/sendmessage", message)
				.then(response => {
					if (response.status === 200) {

					}
				})
				.catch(error => {
					console.log(error);
				});
			this.props.updateMess("text", text);
			this.props.setLoadPage(true);
		}
	}

	renderMessages = () => {
		let i = 0;
		let messageCount = this.props.messages.length;
		let tempMessages = [];

		while (i < messageCount) {
			let previous = this.props.messages[i - 1];
			let current = this.props.messages[i];
			let next = this.props.messages[i + 1];
			let isMine = (current.author === this.state.user);
			let content = current.content;
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
					content={content}
				/>
			);

			// Proceed to the next message.
			i += 1;
		}
		return tempMessages;
	}

	render() {
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

				<div className="message-list-container" ref={this.myRef} >
					{this.renderMessages()}
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