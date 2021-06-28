import React, { useEffect, useState } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import InforUserChat from '../InforUserChat';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import './Messenger.scss';
import { now } from 'moment';


export default class Messenger extends React.Component {
	constructor(props) {
		super(props);
		this.setCurrentUser = this.setCurrentUser.bind(this);
		this.setLoadPage = this.setLoadPage.bind(this);
		this.updateMess = this.updateMess.bind(this);
		this.updateMessReceive = this.updateMessReceive.bind(this);

		this.state = {
			currentUser: this.props.currentUser,
			user: this.props.user,
			button: false,
			loadPage: false,
			messages: [],
			index: 0
		}
	}

	shouldComponentUpdate(nextState) {
		console.log('load messenger should update', this.state.loadPage)
		if ((this.state.loadPage == true))
			return true;
	}

	shouldComponentDidMount() {
		console.log('load messenger should did mount', this.state.messages)
		if (this.state.loadPage == true) return true
	}

	componentDidMount() {
		console.log('load messenger did mount', this.state.messages)
		this.getMessages(this.props.user, this.state.currentUser);
	}

	componentDidUpdate = async () => {
		console.log('load messenger did update')
		if (this.state.loadPage == true) {
			this.setState({ loadPage: false })
		}
	}

	componentWillMount = () => {
		console.log('load messenger will mount')
		this.getMessages(this.props.user, this.props.currentUser);
	}

	updateMess = async (e) => {
		const preMess = this.state.messages;
		let me = {
			id: this.state.index,
			author: this.props.user,
			message: e,
			timestamp: now()
		}
		preMess.push(me)
		await this.setState({ index: this.state.index + 1 })
		await this.setLoadPage(true)
	}

	updateMessReceive = async (message) => {
		console.log('updateMessReceive', message)

		const preMess = this.state.messages;
		let me = {
			id: this.state.index,
			author: this.props.currentUser,
			message: message,
			timestamp: now()
		}
		preMess.push(me)
		await this.setState({ index: this.state.index + 1 })

		await this.setLoadPage(true)
		console.log('receive', this.state.currentUser)
	}

	getMessages = async (user1, user2) => {
		const user = {
			fromEmail: user1,
			toEmail: user2
		}
		await this.setState({ messages: [] })
		await axios.post('http://localhost:8000/historymessage', user)
			.then(response => {
				const mess = response.data;
				let tempMessages = mess.map((result, index) => {
					return {
						id: index,
						author: result.fromEmail,
						message: result.content,
						timestamp: result.sentTime
					};
				});
				this.setState({ messages: tempMessages })
				this.setState({ index: response.data.length })
				this.setLoadPage(true)
				console.log("get mess thanh cong", this.state.messages, this.state.loadPage)
			})
			.catch(error => {
				console.log(error);
			});
	}
	getInformation = () => {
		console.log('get infor')
		if (this.state.button == false) {
			document.querySelector('.infor-user-chat').style.display = 'block';
			document.querySelector('.content').style.width = '53vw';
			this.setState({ button: true })
		}
		else {
			document.querySelector('.infor-user-chat').style.display = 'none';
			document.querySelector('.content').style.width = '77vw';
			this.setState({ button: false })
		}
	}

	handleChangeSearch(event) {
		this.setState({})
	}

	setCurrentUser = (user) => {
		this.setState({ currentUser: user })
		console.log('load messenger set current')

	}

	setLoadPage = async (e) => {
		await this.setState({ loadPage: e })
		console.log('load messenger set loadpage', e)
	}

	render() {
		return (
			<div className="messenger">
				<div className="scrollable sidebar">
					<ConversationList
						currentUser={this.state.currentUser}
						setCurrentUser={this.setCurrentUser}
						loadPage={this.state.loadPage}
						setLoadPage={this.setLoadPage}
						getMessages={this.getMessages}
					/>
				</div>

				<div className="scrollable content">
					<MessageList
						currentUser={this.state.currentUser}
						loadPage={this.state.loadPage}
						setLoadPage={this.setLoadPage}
						messages={this.state.messages}
						updateMess={this.updateMess}
						updateMessReceive={this.updateMessReceive}
					/>


					<div className="button-inf" onClick={this.getInformation}>
						<ToolbarButton key="info" icon="information" />
					</div>
				</div>

				<div className="infor-user-chat">
					<InforUserChat
						currentUser={this.state.currentUser}
						loadPage={this.state.loadPage}
					/>
				</div>
			</div>
		);
	}
}