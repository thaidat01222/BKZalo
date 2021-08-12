import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Link } from "react-router-dom";


import Messenger from '../Messenger';
import getSocketInstance from '../../socket';

import getServerHost from '../../serverHost';
const serverHost = getServerHost();

const cookies = new Cookies();
const socket = getSocketInstance()

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.state = {
      email: cookies.get('user'),
      isLogin: cookies.get('isLogin'),
      currentUser: cookies.get('currentUser'),
      authOK: null,
      profile: {},
      isLoad: false,
      messages: []
    }
  }

  shouldComponentUpdate() {
    if ((this.state.authOK === false) || (this.state.authOK === true))
      return true;
  }

  shouldComponentDidMount() {
  }

  componentDidMount() {
    this.setState({ isLoad: false });
  }

  componentWillMount = async () => {
    this.checkAuth(this.state.email);
    this.getUserProfile();
    socket.emit("list-online", this.state.email);
  }

  checkAuth = async (user) => {
    var auth = 0;
    const account_login = {
      email: user
    };
    await axios.post(serverHost+"/checklogin", account_login)
      .then(response => {
        if (response.status === 200) {
          auth = 1;
          this.setState({ authOK: true });
        }
      })
      .catch(error => {
        console.log(error);
      });

    if (auth === 0) this.setState({ authOK: false });
    await this.setState({ isLoad: true });
  }

  getUserProfile = async () => {
    var user = {
      email: this.state.email
    };

    await axios.post(serverHost+"/user", user)
      .then(response => {
        this.setState({ profile: response.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout = async () => {
    const account_logout = {
      email: this.state.email
    };
    await axios.post(serverHost+'/logout', account_logout)
      .then(response => {
      })

      .catch(error => {
        console.log(error);
      });
    this.setState({ authOK: false });
  }

  onLogout() {
    this.logout();
    cookies.remove('user');
    cookies.remove('pass');
    cookies.remove('isLogin');
    cookies.remove('currentUser');
    cookies.remove('currentUserFullname');
    cookies.remove('avt');
  }

  render() {
    if (this.state.isLoad === true) {
      if (this.state.authOK === true)
        return (
          <div className="chat-page">
            <Link to='/user' className="user-avt" >
              <img src={serverHost+`${this.state.profile.avatar}`} />
            </Link>
            <button className="button-logout" onClick={this.onLogout}>
              <img src='./logout.svg' /></button>
            <Messenger
              currentUser={this.state.currentUser}
              user={this.state.email}
            />
          </div>
        );
      else if (this.state.authOK === false) {
        return (
          <Redirect to='/' />
        )
      }
    }
    else return (
      <div>Loadding page</div>
    )
  }
}