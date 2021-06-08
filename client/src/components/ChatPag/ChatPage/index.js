import React from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Messenger from '../Messenger';

const cookies = new Cookies();


export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: cookies.get('user'),
      password: cookies.get('pass'),
      userInfo: {},
      authOK: false
    }
  }

  checkAuth = async (user, pass) => {
    var auth = 0;
    const account_login = {
      email: user,
      password: pass
    }
    console.log("account_login" + JSON.stringify(account_login));
    await axios.post("http://localhost:8000/login", account_login,)
      .then(response => {
        if (response.status === 200) {
          console.log("Client: Da Login");
          auth = 1;
          this.setState({ authOK: true })
        }
        // if(response.status === 401) {
        //     alert("Client: Sai thong tin");
        //     auth = 0;

        // }
      })
      .catch(error => {
        console.log(error);
      });
    if (auth === 0) this.setState({ authOK: false })
  }

  componentWillMount = async () => {
    console.log("will mount")
    this.checkAuth(this.state.email, this.state.password)
  }

  onLogout () {
    cookies.set('user', '')
    cookies.set('pass', '')
    this.setState({ authOK: false });
  }

  render() {
    console.log("state in render chat page", this.state)

    if (this.state.authOK === false) {
      return (<Redirect to='/' />)
    } else return (
      <div className="App">
        <button className="button-logout" onClick={this.onLogout}>Logout</button>
        <Messenger />
      </div>
    );
  }
}