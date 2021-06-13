import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {useCookies} from 'react-cookie';


import NavBar from './components/header/NavBar';
import Login from './components/LoginPage/Login';
import UserProfile from './components/UserPage/UserProfile';
import Chat from './components/ChatPag/ChatPage';
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/' component={NavBar} />
                <Route exact path='/' component={Login} />
                <Route exact path='/user' component={UserProfile} />
                <Route exact path='/chat' component={Chat} />
                <Route exact path={'/'} component={Footer} />
                <Route exact path={'/user'} component={Footer} />

            </BrowserRouter>
        )
    }
}
// import './App.css';
// import React, { Component } from 'react';
// import io from 'socket.io-client';

// const socket = io('localhost:8000');
// class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.handleChangeMessInput = this.handleChangeMessInput.bind(this);
//     this.handleSend = this.handleSend.bind(this);
//     this.handleChangeUserInput = this.handleChangeUserInput.bind(this);
//     this.handleChangeToInput = this.handleChangeToInput.bind(this);
//     this.state = {
//       getData: '',
//       sendData: '',
//       user: '',
//       to: ''
//     }
//   }
//   handleChangeUserInput = (e) =>{
//     this.setState({ user: e.target.value});
//     console.log("user", this.state.user)
//   }
//   handleChangeMessInput = (e) => {
//     this.setState({ sendData: e.target.value});
//     console.log("mess", this.state.sendData)

//   }
//   handleChangeToInput = (e) =>{
//     this.setState({to: e.target.value});
//     console.log("to: ", this.state.to)

//   }
//   handleSend = (e) =>{
//     e.preventDefault();
//     console.log("handleSend", this.state)
//     const message = {
//         fromEmail: this.state.user,
//         toEmail: this.state.to,
//         content: this.state.sendData,
//         contentType: 'text',
//         sentTime: ''
//       }

//     socket.emit("sendData",message);
//   }
//   componentWillMount() {
//     socket.on('receiveData', res =>{
//       console.log(res);
//       this.setState({getData: res})
//      }) 
//   }

  // componentDidUpdate() {
  //   socket.on('sendData', res=> this.setState({sendData: res.sendData})); 
  // }

  // componentDidMount(){
  //   socket.emit("updateData",this.state.sendData);
  // }
  
//   render () {
//     return (
//       <div>
//         <input onChange={this.handleChangeUserInput} type="text" placeholder="User"></input>
//         <input onChange={this.handleChangeToInput} type="text" placeholder="To"></input>        
//         <input onChange={this.handleChangeMessInput} type="text" placeholder="Mess"></input>
//         <button onClick={this.handleSend} type="submit">Send</button>
//         <h1> {this.state.getData}</h1>
//       </div>
//     )
//   }
// }
// export default App;
