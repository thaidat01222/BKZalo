import React from 'react';
import axios from 'axios';
import { now } from 'moment';

import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import InforUserChat from '../InforUserChat';
import ToolbarButton from '../ToolbarButton';
import './Messenger.scss';

import getServerHost from '../../serverHost';
const serverHost = getServerHost();

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
			button2: false,
			loadPage: false,
			messages: [],
			index: 0,
			newChat: []
		};
	}

	shouldComponentUpdate(nextState) {
		if ((this.state.loadPage === true))
			return true;
	}

	shouldComponentDidMount() {
		if (this.state.loadPage === true) return true;
	}

	componentDidMount() {
		this.getMessages(this.props.user, this.state.currentUser);
	}

	componentDidUpdate = async () => {
		if (this.state.loadPage === true) {
			this.setState({ loadPage: false });
		}
	}

	componentWillMount = () => {
		this.getMessages(this.props.user, this.props.currentUser);
		this.getNewChat();
	}

	getNewChat = async () => {
		const e = {
			email: this.state.user
		}
		await axios.post(serverHost+'/newchat', e)
			.then(response => {
				let temp = response.data.map((result) => {
					return {
						email: result.email,
						fullName: result.fullName,
						avatar: result.avatar
					};
				});
				this.setState({ newChat: temp });
			})
			.catch(error => {
				console.log(error);
			});
	}

	updateMess = async (content, message) => {
		let preMess = this.state.messages;
		if (content === "text") {
			let me = {
				id: this.state.index,
				content: "text",
				author: this.props.user,
				message: message,
				timestamp: now()
			}
			preMess.push(me);
		} else if (content === "image") {
			let me = {
				id: this.state.index,
				content: "image",
				author: this.props.user,
				message: message,
				timestamp: now()
			};
			preMess.push(me);
		}
		await this.setState({ index: this.state.index + 1 });
		await this.setLoadPage(true);
	}

	updateMessReceive = async (content, message) => {
		let preMess = this.state.messages;
		if (content === "text") {
			let me = {
				id: this.state.index,
				content: "text",
				author: this.props.currentUser,
				message: message,
				timestamp: now()
			};
			preMess.push(me);
		} else if (content === "image") {
			let me = {
				id: this.state.index,
				content: "image",
				author: this.props.currentUser,
				message: serverHost+'/' + message,
				timestamp: now()
			};
			preMess.push(me);
		}
		await this.setState({ index: this.state.index + 1 });
		await this.setLoadPage(true);
	}

	getMessages = async (user1, user2) => {
		let user = {
			fromEmail: user1,
			toEmail: user2
		};
		await this.setState({ messages: [] });
		await axios.post(serverHost+'/historymessage', user)
			.then(response => {
				let mess = response.data;
				let tempMessages = mess.map((result, index) => {
					if (result.contentType === "text") {
						return {
							id: index,
							content: "text",
							author: result.fromEmail,
							message: result.content,
							timestamp: result.sentTime
						};
					} else if (result.contentType === "image") return {
						id: index,
						content: "image",
						author: result.fromEmail,
						message: serverHost + result.image,
						timestamp: result.sentTime
					}
				});
				this.setState({ messages: tempMessages });
				this.setState({ index: response.data.length });
				this.setLoadPage(true);
			})
			.catch(error => {
				console.log(error);
			});
	}
	getInformation = () => {
		if (this.state.button === false) {
			document.querySelector('.infor-user-chat').style.display = 'block';
			document.querySelector('.content').style.width = '53vw';
			this.setState({ button: true });
		}
		else {
			document.querySelector('.infor-user-chat').style.display = 'none';
			document.querySelector('.content').style.width = '77vw';
			this.setState({ button: false });
		}
	}

	handleChangeSearch(event) {
		this.setState({});
	}

	setCurrentUser = (user) => {
		this.setState({ currentUser: user });
	}

	addChat = () => {
		if (this.state.button2 === false) {
			document.querySelector('.add-chat').style.display = 'block';
			this.setState({ button2: true });
			document.querySelector('.conversation-list-items').style.display = 'none';
			document.querySelector('.conversation-search').style.display = 'none';
		}
		else {
			document.querySelector('.add-chat').style.display = 'none';
			this.setState({ button2: false });
			document.querySelector('.conversation-list-items').style.display = 'block';
			document.querySelector('.conversation-search').style.display = 'block';
		}
	}

	setLoadPage = async (e) => {
		await this.setState({ loadPage: e });
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
						newChat={this.state.newChat}
						addChat={this.addChat}
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