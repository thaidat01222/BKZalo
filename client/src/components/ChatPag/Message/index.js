import React from 'react';
import moment from 'moment';
import { Cookies } from 'react-cookie';

import './Message.css';

const cookies = new Cookies();

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    content
  } = props;
  const avt = cookies.get('avt')
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  if (content == 'text') return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>
      {
        showTimestamp &&
        <div className="timestamp">
          {friendlyTimestamp}
        </div>
      }

      <div className="bubble-container">
        <div className={[
          'avt-message',
          `${isMine ? 'mine' : ''}`,
          `${endsSequence ? 'end' : ''}`
        ].join(' ')}  ><img src={avt} /></div>
        <div className="bubble" title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
  else if (content == 'image') return (
    <div className={[
      'message',
      `${isMine ? 'mine' : ''}`,
      `${startsSequence ? 'start' : ''}`,
      `${endsSequence ? 'end' : ''}`
    ].join(' ')}>
      {
        showTimestamp &&
        <div className="timestamp">
          {friendlyTimestamp}
        </div>
      }

      <div className="bubble-container">
        <div className={[
          'avt-message',
          `${isMine ? 'mine' : ''}`,
          `${endsSequence ? 'end' : ''}`
        ].join(' ')}  ><img src={avt} /></div>
        <div className="bubble" title={friendlyTimestamp} className="message-image">
          <img src={data.message} />
        </div>
      </div>
    </div>
  )
}