import React, {useEffect, useState} from 'react';
import './Compose.css';



export default function Compose(props) {
  const [messages, setMessages] = useState([])

useEffect(() => {
 
},[])
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />
        <button>send</button>
        {
          props.rightItems
        }
      </div>
    );
}