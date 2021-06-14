import React, { useEffect, useState } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { Cookies } from 'react-cookie';
import axios from 'axios'

import './MessageList.css';

const cookies = new Cookies();
const MY_USER_ID = cookies.get('user');


export default function MessageList(props) {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    getMessages();
  }, [])

  
  const getMessages = async () => {
    console.log('get message')
    const user = {
      email: cookies.get('user')
    }
    await axios.post('http://localhost:8000/historymessage', user)
      .then(response => {       
        const mess = response.data.historyMessage; 
        console.log('history', mess)
        let tempMessages = mess.map((result, index) => {
          return {
            id: index,
            author: result.fromEmail,
            message: result.content,
            timestamp: result.sendtime
          };
        });
          setMessages([...messages, ...tempMessages])
          console.log("messs", messages)
        })


      .catch(error => {
        console.log(error);
      });
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
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

  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton key="info" icon="information" />,
          <ToolbarButton key="video" icon="video-player" />,
          <ToolbarButton key="phone" icon="phone-call" />
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>

      <Compose rightItems={[
        // <ToolbarButton key="photo" icon="gallery2" />,
        // <ToolbarButton key="image" icon="ion-ios-image" />,
        // <ToolbarButton key="audio" icon="ion-ios-mic" />,
        // <ToolbarButton key="money" icon="ion-ios-card" />,
        // <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
        <ToolbarButton key="emoji" icon="send2" id="send2"/>
      ]} />
    </div>
  );
}