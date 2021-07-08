import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import InputNewChat from './input'
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Link, Route } from 'react-router-dom'

import './ConversationList.css';

const cookies = new Cookies();

export default function ConversationList(props) {
	const [search, setSearch] = useState('');
	const searchUperCase = search.toUpperCase();
	const [conversations, setConversations] = useState([]);
	const currentUser = props.currentUser;
	const loadPage = props.loadPage;
	const setCurrentUser = props.setCurrentUser;
	const setLoadPage = props.setLoadPage;
	const getMessages = props.getMessages;

	useEffect(() => {
		if (loadPage == true) {
			getConversations()
		}
	}, [loadPage])

	const getConversations = async () => {
		var user = {
			email: cookies.get('user')
		}
		console.log('load conversation-list list user')
		await axios.post('http://localhost:8000/listuser', user)
			.then(response => {
				let newConversations = response.data.map(result => {
					return {
						photo: 'http://localhost:8000' + result.avatar,
						name: result.fullName,
						text: result.lastMess,
						email: result.email
					};
				});
				setConversations(newConversations)
			})
			.catch(error => {
				console.log(error)
			})
	}
	async function handleClick(user, fullname, avt) {
		cookies.set('currentUser', user)
		cookies.set('currentUserFullname', fullname)
		cookies.set('avt', avt)
		await getMessages(cookies.get('user'), user)
		await setCurrentUser(user)
		console.log('You clicked ', currentUser, loadPage);
	}

	function handleChangeSearch(e) {
		setSearch(e.target.value);
		console.log('handle change search', search)
	}
	console.log('new chat', props.newChat)
	return (	
		<div>
			<div className="conversation-list">
				<Toolbar
					title="Messenger"
					leftItems={[
						<ToolbarButton key="cog" icon="settings" />
					]}
					rightItems={[
						<ToolbarButton key="add" icon="plus-circle" className="new-chat"/>
					]}
				/>
				<InputNewChat 
					newChat={props.newChat}
				/>
				{/* <ConversationSearch
          				handleChangeSerach={handleChangeSearch}
          				search={search}
       			 /> */}
				<div className="conversation-search">
					<input
						type="search"
						className="conversation-search-input"
						placeholder="Search Messages"
						value={search}
						onChange={handleChangeSearch}
					/>
				</div>

			</div>
			<div className="conversation-list-items">
				{
					conversations.map(conversation => {
						if (conversation.name.toUpperCase().indexOf(searchUperCase) > -1) {
							if (cookies.get('currentUser') == conversation.email) {
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
