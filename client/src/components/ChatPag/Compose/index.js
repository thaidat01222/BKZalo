import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import './Compose.css';
import getSocketInstance from '../../socket';
import ToolbarButton from '../ToolbarButton';
const socket = getSocketInstance()

// socket.on('received-message', data =>{
//   console.log(data);
// })

const cookies = new Cookies();
export default class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSend = this.props.handleSend;
    this.state = {
      typing: '',
      getMesss: '',
      handleSend : props.handleSend
    }
    this.inputOpenFileRef = React.createRef()
  }

  handleTyping = (e) => {
    this.setState({ typing: e.target.value })
    e.preventDefault();
  }

  showOpenFileDlg = () => {
    this.inputOpenFileRef.current.click()
    console.log('upload', this.inputOpenFileRef)
}

  render() {
    console.log('load compose')
    return (
      <div className="compose">
                <input ref={this.inputOpenFileRef} type="file" style={{ display: "none" }}/>
                {/* <button >Open</button> */}
                <div onClick={this.showOpenFileDlg}>
        <ToolbarButton key="info" icon="image" /></div>
        <input
          type="text"
          className="compose-input"
          placeholder="Aa"
          value={this.state.typing}
          onChange={this.handleTyping}
        />
        <button onClick={() => {this.handleSend(this.state.typing); this.setState({ typing: ''})}}>
          <ToolbarButton key="info" icon="send2" />
          </button>
      </div>
    );
  }
}