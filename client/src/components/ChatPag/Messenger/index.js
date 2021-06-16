import React, { useEffect, useState } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import InforUserChat from '../InforUserChat';
import ToolbarButton from '../ToolbarButton';

import './Messenger.scss';

export default function Messenger(props) {
  const [button, setButton] = useState(null);

  const getInformation = () => {
    console.log('get infor')
    if ((button == false) || (button == null)) {
      document.querySelector('.infor-user-chat').style.display = 'block';
      document.querySelector('.content').style.width = '53vw';
      var click = true;
      setButton(click)
      console.log('click', button, click)
    }
    else {
      document.querySelector('.infor-user-chat').style.display = 'none';
      document.querySelector('.content').style.width = '77vw';
      var click = false;
      setButton(click)
    }
  }
  console.log('button', button)
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageList />
        
        <div className="button-inf" onClick={getInformation}> <ToolbarButton key="info" icon="information" /> </div>
      </div>
      
      <div className="infor-user-chat">
        <InforUserChat />
      </div>
    </div>
  );
}