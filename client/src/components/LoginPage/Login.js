import React, { useState } from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import io from 'socket.io-client';
const cookies = new Cookies();
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChanges = this.handleEmailChanges.bind(this);
        this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
        this.handleUsernameChanges = this.handleUsernameChanges.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.state = {
            typingE: '',
            typingP: '',
            email: cookies.get('user'),
            password: cookies.get('pass'),
            username: '',
            redirect: false,
            button: false
        }

    }

    login = async (user, pass) => {
        var auth = 0;
        const account_login = {
            email: user,
            password: pass
        }
        console.log("account_login" + JSON.stringify(account_login));
        await axios.post("http://localhost:8000/login", account_login)
            .then(response => {
                if (response.status === 200) {
                    const socket = io('http://localhost:8000'); 
                    console.log("Client: Da Login Vao Socket");
                    auth = 1;
                    this.setState({ redirect: true })
                    socket.emit("list-online",this.state.email);
                }
                // if(response.status === 401) {
                //     alert("Client: Sai thong tin");
                //     auth = 0;
            })
            .catch(error => {
                console.log(error);
            });
    }
    

    checkAuth = async (user, pass) => {
        var auth = 0;
        const account_login = {
            email: user
        }
        console.log("account_login" + JSON.stringify(account_login));
        await axios.post("http://localhost:8000/checkLogin", account_login,)
            .then(response => {
                if (response.status === 200) {
                    const socket = io('http://localhost:8000'); 
                    console.log("Client: Da Login Vao Socket");
                    auth = 1;
                    this.setState({ redirect: true })
                    socket.emit("list-online",this.state.email);
                    socket.on('disconnected', function() {

                        socket.emit('disconnected', this.state.email);
            
                    });
                } else {
                // if(response.status === 401) {
                //     alert("Client: Sai thong tin");
                //     auth = 0;
                // redirect => về trang login. 
                }
                
            })
            .catch(error => {
                console.log(error);
            });
    }
    shouldComponentUpdate(nextState) {
        console.log("shouldComponentUpdate", (this.state.redirect !== false))
        // if ((nextState.redirect !== this.state.redirect)) return true;
        if ((this.state.button === true) || (this.state.redirect === true)) return true;
        else if ((nextState.typingE !== this.state.typingE) || (nextState.typingP !== this.state.typingP))
            return false;

    }

    componentDidMount = async () => {
        console.log("did mount");
        this.checkAuth(this.state.email, this.state.password)
        console.log('state', this.state.email, this.state.password)
    }

    handleEmailChanges(e) {
        this.setState({ typingE: e.target.value })
        console.log("this.state.email", this.state.typingE)
    }

    handlePasswordChanges(e) {
        this.setState({ typingP: e.target.value })
    }

    handleUsernameChanges(e) {
        this.setState({ username: e.target.value })
    }

    async handleSubmitLogin(e) {
        e.preventDefault();
        this.setState({ email: this.state.typingE });
        this.setState({ password: this.state.typingP })
        this.setState({ button: true })
        cookies.set('user', this.state.typingE, { path: '/' });
        cookies.set('pass', this.state.typingP, { path: '/' });
        this.login(this.state.typingE, this.state.typingP);
    }
    handleSubmitSignup(e) {
        e.preventDefault();
        const account_signup = {
            username: this.state.username,
            email: this.state.typingE,
            password: this.state.typingP
        }
        console.log("Client: Data Sent: " + JSON.stringify(account_signup));
        axios.post('http://localhost:8000/signup', account_signup)
            .then(response => {
                if (response.status == 401) {
                    alert("Client: Tai khoan da ton tai");
                    console.log("Client: Tai khoan da ton tai");
                }
                if (response.status == 200) {
                    alert("Client: Da dang ky thanh cong");
                    console.log(response);
                    this.setState({ redirect: true });
                    cookies.set('user', this.state.typingE, { path: '/' });
                    cookies.set('pass', this.state.typingP, { path: '/' });
                }
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({ button: true })
    }

    onSignIn = () => {
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    onSignUp = () => {
        const signUpButton = document.getElementById('signUp');
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }


    render() {
       this.checkAuth(this.state.email, this.state.password);
        console.log("state in render", this.state)
        if (this.state.redirect === true) {
            return (<Redirect to='/chat' />)
        } else return (
            <div className="login-page">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <input type="text" onChange={this.handleUsernameChanges} placeholder="Name" />
                            <input type="email" onChange={this.handleEmailChanges} placeholder="Email" />
                            <input type="password" onChange={this.handlePasswordChanges} placeholder="Password" />
                            <button type="submit" onClick={this.handleSubmitSignup}>Submit</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <input type="email" onChange={this.handleEmailChanges} placeholder="Email" />
                            <input type="password" onChange={this.handlePasswordChanges} placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button type="submit" onClick={this.handleSubmitLogin}>Submit</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={this.onSignUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


