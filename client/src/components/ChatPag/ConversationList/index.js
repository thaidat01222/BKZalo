import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Link, Route } from 'react-router-dom'

import './ConversationList.css';

const cookies = new Cookies();

export default function ConversationList(props) {
  const [currentUser, setCurrentUser] = useState();
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

  const getConversations = async () => {
    var user = {
      email: cookies.get('user')
    }
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
        setConversations([...conversations, ...newConversations])
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log('load page')
  function handleClick(user, fullname) {
    cookies.set('currentUser', user)
    cookies.set('currentUserFullname', fullname)
    console.log('You clicked submit.');

  }
  console.log('us', currentUser)
  return (
    <div>
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="settings" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="plus-circle" />
          ]}
        />
        <ConversationSearch />

      </div>
      <div className="conversation-list-items">
        {
          conversations.map(conversation => {
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
              <div onClick={e => handleClick(conversation.email, conversation.name)}>
                <ConversationListItem
                  key={conversation.name}
                  data={conversation}
                  />
              </div>
                )
          }

                )
        }
              </div>
    </div>
      );
}

      {/* <div onClick={e => handleClick(conversation.email)}> */}