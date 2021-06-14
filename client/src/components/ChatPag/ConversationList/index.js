import React, { useState, useEffect } from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import { Cookies } from 'react-cookie'

import './ConversationList.css';

const cookies = new Cookies();

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

  const getConversations = async () => {
    var user = {
      email: cookies.get('user')
    }
    console.log('list user')
    await axios.post('http://localhost:8000/listuser', user)
      .then(response => {
        console.log('list user', response.data[0])
        let newConversations = response.data.map(result => {
          return {
            photo: 'http://localhost:8000/' + result.avatar,
            name: result.fullName,
            text: result.lastMess
          };
        });
        setConversations([...conversations, ...newConversations])
      })
      .catch(error => {
        console.log(error)
      })
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
            <ToolbarButton key="add" icon="plus-circle" />
          ]}
        />
        <ConversationSearch />

      </div>
      <div className="conversation-list-items">
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    </div>
  );
}