import React from 'react';

import './Compose.css';
import getSocketInstance from '../../socket';
import ToolbarButton from '../ToolbarButton';

const socket = getSocketInstance();

export default class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSend = this.props.handleSend;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = {
      typing: '',
      getMesss: '',
      contentType: '',
      image: '',
      handleSend: props.handleSend
    };
    this.inputOpenFileRef = React.createRef();
  }

  handleTyping = (e) => {
    this.setState({ typing: e.target.value });
    e.preventDefault();
  }

  handleChangeImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ image: reader.result });
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  };

  showOpenFile = () => {
    this.inputOpenFileRef.current.click();
    document.querySelector('.open-image').style.display = 'block';
  }

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (this.state.image !== '') {
        document.querySelector('.open-image').style.display = 'none';
      }
      this.handleSend(this.state.typing, this.state.image)
      this.setState({ typing: '' });
      event.preventDefault();
      event.stopPropagation();
    }
  }

  render() {
    return (
      <div className="compose">
        <input ref={this.inputOpenFileRef} type="file" style={{ display: "none" }} onChange={this.handleChangeImage} />
        <img src={this.state.image} className="open-image" />
        <div onClick={this.showOpenFile}>
          <ToolbarButton key="info" icon="image" />
        </div>
        <input
          type="text"
          className="compose-input"
          placeholder="Aa"
          value={this.state.typing}
          onChange={this.handleTyping}
          onKeyDown={this.onKeyDown}
        />
        <button onClick={() => {
          this.handleSend(this.state.typing, this.state.image);
          this.setState({ typing: '' });
          this.setState({ image: '' })
        }}>
          <ToolbarButton key="info" icon="send2" />
        </button>
      </div>
    );
  }
}