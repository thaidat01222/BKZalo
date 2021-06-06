import React from 'react';
import './login.scss';
import axios from 'axios';

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
            password: '',
            username: ''
        }
    }

    handleEmailChanges(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordChanges(e) {
        this.setState({ password: e.target.value })
    }

    handleUsernameChanges(e) {
        this.setState({ username: e.target.value })
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        const account_login = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(account_login);
        console.log("Client: Data Sent: " + JSON.stringify(account_login));
        axios.post("http://localhost:8000/login", account_login,)
            .then(response => {
                if (response.status == 200) {
                    console.log("Client: Da Login");
                    console.log(response.data);
                    this.setState({ redirect: true });
                }
                if (response.status == 401) {
                    alert("Client: Sai thong tin");
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
    }

    handleSubmitSignup(e) {
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