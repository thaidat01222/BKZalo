import React, {useState} from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import socketIOClient from 'socket.io-client';
import {socket} from '../header/NavBar'

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
            username:' ',
            redirect: false
        }    
   
    }

    checkAuth = async(user, pass) => {
        var auth = 0;
        const account_login = {
            email: user,
            password: pass
        }
        console.log("account_login" + JSON.stringify(account_login));
        await axios.post("http://localhost:8000/login", account_login, )
        .then(response => {
            if (response.status === 200) {
                console.log("Client: Da Login");
                auth = 1;
                this.setState({redirect : true})                
            }
            // if(response.status === 401) {
            //     alert("Client: Sai thong tin");
            //     auth = 0;
                
            // }
        })
        .catch(error => {
            console.log(error);
        });  
    
        if (auth === 1) return (true)
        else if (auth === 0) return (false)
    }
    
    authOK = (data) =>{
        console.log("Client: auth OK")
        return (<Redirect to='/chat' />)
    }
    
    authFail = () =>{
        this.setState({typingE: ''})
        this.setState({password: ''});
    }
    shouldComponentUpdate (nextState) {
        console.log("shouldComponentUpdate", this.checkAuth(this.state.email, this.state.password))
        if ((nextState.redirect !== this.state.redirect)) return true;
        if ((nextState.typingE !== this.state.typingE) || (nextState.typingP !== this.state.typingP))
            return false;
    }

    componentDidMount = async () => {
        console.log("did mount");
        const cookieName = cookies.get('user');
        const cookiePass = cookies.get('pass');
        this.setState ({email: cookieName });
        this.setState ({password: cookiePass });
        this.checkAuth(this.state.email, this.state.password)
        console.log('state',this.state.email, this.state.password)
        console.log("cookie", cookieName, cookiePass)
    }

    handleEmailChanges(e) {
        this.setState({ typingE: e.target.value })
        console.log("this.state.email", this.state.typingE)
    }

    handlePasswordChanges(e) {
        this.setState({ typingP: e.target.value })
    }
    
    handleUsernameChanges(e){
        this.setState({ username: e.target.value })        
    }

    async handleSubmitLogin(e){
        e.preventDefault();
        this.setState({email: this.state.typingE});
        this.setState({password: this.state.typingP})
        
        cookies.set('user',this.state.typingE, { path: '/' });
        cookies.set('pass', this.state.typingP, { path: '/' });
        this.checkAuth(this.state.email, this.state.password);
    }
    
    handleSubmitSignup(e){
        e.preventDefault();
        const account_signup = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
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
                }
            })
            .catch(error => {
                console.log(error);
            });
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
        if ( this.state.redirect === true ) {
            return (<Redirect to='/chat'/>)
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