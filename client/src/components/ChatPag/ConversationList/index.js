import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import InputNewChat from './input'
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import './ConversationList.css';

import getServerHost from '../../serverHost';
const serverHost = getServerHost();

const cookies = new Cookies();

export default function ConversationList(props) {
	const [search, setSearch] = useState('');
	const searchUperCase = search.toUpperCase();
	const [conversations, setConversations] = useState([]);
	const loadPage = props.loadPage;
	const setCurrentUser = props.setCurrentUser;
	const getMessages = props.getMessages;

	useEffect(() => {
		if (loadPage === true) {
			getConversations();
		}
	}, [loadPage])

	const getConversations = async () => {
		var user = {
			email: cookies.get('user')
		};
		await axios.post(serverHost+'/listuser', user)
			.then(response => {
				let newConversations = response.data.map(result => {
					return {
						photo: serverHost + result.avatar,
						name: result.fullName,
						text: result.lastMess,
						email: result.email
					};
				});
				setConversations(newConversations);
			})
			.catch(error => {
				console.log(error);
			})
	}
	async function handleClick(user, fullname, avt) {
		cookies.set('currentUser', user);
		cookies.set('currentUserFullname', fullname);
		cookies.set('avt', avt);
		await getMessages(cookies.get('user'), user);
		await setCurrentUser(user);
	}

	function handleChangeSearch(e) {
		setSearch(e.target.value);
	}

	return (
		<div>
			<div className="conversation-list">
				<Toolbar
					title="Messenger"
					leftItems={[
						<ToolbarButton key="cog" icon="settings" />
					]}
					rightItems={[
						<div onClick={props.addChat} className="button-new-chat">
							<ToolbarButton key="add" icon="plus-circle" className="new-chat" />
						</div>
					]}
				/>
				<InputNewChat
					newChat={props.newChat}
					setCurrentUser={props.setCurrentUser}
					getMessages={props.getMessages}
				/>
				<ConversationSearch
					handleChangeSearch={handleChangeSearch}
					search={search}
				/>
			</div>
			<div className="conversation-list-items">
				{
					conversations.map(conversation => {
						if (conversation.name.toUpperCase().indexOf(searchUperCase) > -1) {
							if (cookies.get('currentUser') === conversation.email) {
								return (
									<div className="current-user">
										<ConversationListItem
											key={conversation.name}
											data={conversation}
										/></div>
								)
							}
							else return (
								<div onClick={e => handleClick(conversation.email, conversation.name, conversation.photo)}>
									<ConversationListItem
										key={conversation.name}
										data={conversation}
									/>
								</div>
							)
						}
					})
				}
			</div>
		</div>
	);
}
