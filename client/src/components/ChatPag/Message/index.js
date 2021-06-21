import React from 'react';
import moment from 'moment';
import './Message.css';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default function Message(props) {
  const {
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp
  } = props;
  const avt = cookies.get('avt')
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
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
        ].join(' ')}  ><img src={avt}/></div>
        <div className="bubble" title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
}