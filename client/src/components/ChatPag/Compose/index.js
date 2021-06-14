import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import './Compose.css';
import getSocketInstance from '../../socket'
const socket = getSocketInstance()

socket.on('received-message', data =>{
  console.log(data);
})

console.log('start loading page')
const cookies = new Cookies();

export default class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.state = {
      typing: '',
      getMesss: ''
    }
  }

  // componentDidUpdate (nextState) {
  //   // if (nextState.typing !== this.state.typing) return false;
  // }
  // componentDidMount() {
  //   socket.on('receiveData', res =>{
  //     console.log(res);
  //     this.setState({mess: res})
  //    }) 
  //    console.log("mess:", this.state.mess)
  // }

  handleTyping = (e) => {
    this.setState({ typing: e.target.value })
    console.log("typing", this.state.typing)
  }
  handleSend = (e) => {
    e.preventDefault();
    console.log("send")
    console.log("state", new Date().getTime())
    const message = {
      fromEmail: cookies.get('user'),
      toEmail: "b@gmail.com",
      content: this.state.typing,
      contentType: 'text',
      sentTime: ''
    }
    // socket.emit("sendData",message);
    console.log("Client: message send: " + JSON.stringify(message));
    axios.post("http://localhost:8000/sendmessage", message)
      .then(response => {
        if (response.status === 200) {
          console.log("");
        }
        // if(response.status === 401) {
        //     alert("Client: Sai thong tin");
        //   
        // }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="compose">
        <img src='./plus2.svg' />
        <input
          type="text"
          className="compose-input"
          placeholder="Aa"
          value={this.state.typing}
          onChange={this.handleTyping}
        />
        <button onClick={this.handleSend}><img src='./send2.svg' /></button>
      </div>
    );
  }
}