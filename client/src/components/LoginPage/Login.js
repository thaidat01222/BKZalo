import React, {useState} from 'react';
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const cookies = new Cookies();

async function checkAuth (user, pass) {
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
            // this.setState({ redirect: true });
            auth = 1;
            authOK();
        }
        if(response.status === 401) {
            alert("Client: Sai thong tin");
            auth = 0;
            authFail();
        }
        // console.log(response);
        // if (response.status == 401) {
        //     alert("Sai Thong Tin Tai Khoan");
        //     console.log("sai thong tin");
        // }
    })
    .catch(error => {
        console.log(error);
    });  

    if (auth === 1) return (true)
    else if (auth === 0) return (false)
}

function authOK () {
    console.log("auth OK")
    return (<Redirect to='/user' />)
}

function authFail () {
    console.log("auth Fail")
    return 0;
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChanges = this.handleEmailChanges.bind(this);
        this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
        this.handleUsernameChanges = this.handleUsernameChanges.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);      

        this.state = {                
            email: '',
            password:'',
            username:'' ,
            endpoint: 'http://localhost:8000/'           
        }      
   
    }

    componentDidMount = () => {
        console.log("did mount");
        const cookieName = cookies.get('user');
        const cookiePass = cookies.get('pass');
        this.setState ({email: cookieName });
        this.setState ({password: cookiePass });
        console.log('cookie',this.state.email, this.state.password)
        // checkAuth(cookieName, cookiePass);
        // if (checkAuth(cookieName, cookiePass) == true ) {
        //     console.log("auth ok");
        // } else console.log("auth false")
        console.log("auth", checkAuth(this.state.email, this.state.password))
    }

    handleEmailChanges(e) {
        this.setState({ email: e.target.value })
        console.log("this.state.email", this.state.email)
    }

    handlePasswordChanges(e) {
        this.setState({ password: e.target.value })
    }
    
    handleUsernameChanges(e){
        this.setState({ username: e.target.value })        
    }

    handleSubmitLogin(e){
        e.preventDefault();
        checkAuth(this.state.email, this.state.password)
        cookies.set('user',this.state.email);
        cookies.set('pass', this.state.password);
        console.log("auth", checkAuth(this.state.email, this.state.password))
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
        //         const signUpButton = document.getElementById('signUp');
        // const signInButton = document.getElementById('signIn');
        // const container = document.getElementById('container');

        // signUpButton.addEventListener('click', () => {
        // 	container.classList.add("right-panel-active");
        // });

        // signInButton.addEventListener('click', () => {
        // 	container.classList.remove("right-panel-active");
        // });
        return (
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