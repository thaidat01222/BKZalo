import React from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Messenger from '../Messenger';

const cookies = new Cookies();


export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);

    this.state = {
      email: cookies.get('user'),
      password: cookies.get('pass'),
      userInfo: {},
      authOK: null
    }
  }

  componentWillMount = async () => {
    console.log("will mount")
    this.checkAuth(this.state.email, this.state.password)
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
    console.log("auth", auth, this.state.authOK)
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
    console.log("on logout")
    
  }

  render() {
    console.log("state in render chat page", this.state)

    if (this.state.authOK === true)
      return (
        <div className="App">
          <button className="button-logout" onClick={this.onLogout}>Logout</button>
          <Messenger />
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