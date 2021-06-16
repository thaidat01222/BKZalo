import React from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Messenger from '../Messenger';
import { io } from 'socket.io-client';
import {Link} from "react-router-dom";
import getSocketInstance from '../../socket'
// import SocketIOClient from '../../socket';
// import socket from '../../socket';
const cookies = new Cookies();


const socket = getSocketInstance()

// const socket = SocketIOClient();
// const sock = socket;
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      email: cookies.get('user'),
      password: cookies.get('pass'),
      isLogin: cookies.get('isLogin'),
      authOK: true,
      profile: {}
    }
  }



  componentWillMount = async () => {
    this.checkAuth(this.state.email);
    socket.emit("list-online", this.state.email);
    this.getUserProfile();
  }

  checkAuth = async (user) => {
    var auth = 0;
    const account_login = {
      email: user
    }
    console.log("account_login" + JSON.stringify(account_login));
    await axios.post("http://localhost:8000/checklogin", account_login)
      .then(response => {
        if (response.status === 200) {
          console.log("Client: Da Login");
          auth = 1;
          this.setState({ authOK: true })
        }
      })
      .catch(error => {
        console.log(error);
      });

    if (auth === 0) this.setState({ authOK: false })
  }

  getUserProfile = async () => {
    var user = {
        email: this.state.email
    };

    await axios.post("http://localhost:8000/user", user)
        .then(response => {
            this.setState({ profile: response.data[0] })
        })
        .catch(error => {
            console.log(error);
        });
  }

  logout = async () => {
    const account_logout = {
      email: this.state.email
    }
    console.log("LogOut " + JSON.stringify(account_logout))
    await axios.post('http://localhost:8000/logout', account_logout)
      .then(response => {
        console.log(response.data)
      })

      .catch(error => {
        console.log(error);
      });
    this.setState({ authOK: false })
  }

  onLogout() {
    this.logout()
    cookies.set('user', '')
    cookies.set('pass', '')
    cookies.set('isLogin', '')
  }

  render() {
    if (this.state.authOK === true)
      return (
        <div className="chat-page">
          <Link to='/user' className="user-avt" >
            <img src={`http://localhost:8000${this.state.profile.avatar}`}/>
          </Link>
          <button className="button-logout" onClick={this.onLogout}>
          <img src='./logout.svg' /></button>
          <Messenger/>

        </div>
      );
    else if (this.state.authOK === false) {
      return (<Redirect to='/' />)
    }
    else return (
      <div>Loadding page</div>
    )
  }
}