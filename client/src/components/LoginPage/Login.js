import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import './login.scss';
import getServerHost from '../serverHost';
const serverHost = getServerHost();

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
            password: '',
            username: '',
            redirect: false,
            button: false,
            isLogin: cookies.get('isLogin')
        };
    }


    shouldComponentUpdate(nextState) {
        if ((this.state.button === true) || (this.state.redirect === true))
            return true;
        else if ((nextState.typingE !== this.state.typingE) || (nextState.typingP !== this.state.typingP))
            return false;
    }

    componentDidMount = async () => {
        this.checkAuth(this.state.isLogin);
    }

    getMess = async (e) => {
        let user = {
            email: e
        };
        await axios.post(serverHost+'/listuser', user)
            .then(response => {
                cookies.set('currentUser', response.data[0].email);
                cookies.set('currentUserFullname', response.data[0].fullName);
                cookies.set('avt', serverHost + response.data[0].avatar);
            })
            .catch(error => {
                console.log(error)
            })
    }

    login = async (user, pass) => {
        var auth = 0;
        let account_login = {
            email: user,
            password: pass
        };
        await this.getMess(user)
        await axios.post(serverHost+"/login", account_login)
            .then(response => {
                if (response.status === 200) {
                    auth = 1;
                    this.setState({ redirect: true })
                    this.setState({ isLogin: true })
                    cookies.set('isLogin', true, { path: '/' });
                }
                if (response.status === 401) {
                    // alert("Client: Sai thong tin");
                    auth = 0;
                    console.log("401")
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    checkAuth = async (islogin) => {
        if (islogin === "true") {
            this.setState({ redirect: true });
        }
    }

    handleEmailChanges(e) {
        this.setState({ typingE: e.target.value });
    }

    handlePasswordChanges(e) {
        this.setState({ typingP: e.target.value });
    }

    handleUsernameChanges(e) {
        this.setState({ username: e.target.value });
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        this.setState({ email: this.state.typingE });
        this.setState({ password: this.state.typingP });
        this.setState({ button: true });
        cookies.set('user', this.state.typingE);
        this.getMess(this.state.typingE);
        this.login(this.state.typingE, this.state.typingP);
    }
    handleSubmitSignup(e) {
        e.preventDefault();
        let account_signup = {
            username: this.state.username,
            email: this.state.typingE,
            password: this.state.typingP
        };
        axios.post(serverHost+'/signup', account_signup)
            .then(response => {
                console.log(response)
                if (response.status === 401) {
                    alert("Account already exists!");
                }
                if (response.status === 200) {
                    alert("You have successfully registered!");
                    this.setState({ redirect: true });
                    cookies.set('user', this.state.typingE, { path: '/' });
                    cookies.set('isLogin', true, { path: '/' });
                }
            })
            .catch(error => {
                console.log(error);
                alert("Account already exists!");
            });
        this.setState({ button: true });
    }

    onSignIn = () => {
        let container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    onSignUp = () => {
        let container = document.getElementById('container');
        container.classList.add("right-panel-active");
    }


    render() {
        this.checkAuth(this.state.isLogin);
        if ((this.state.redirect === true) || (this.state.isLogin === "true")) {
            return (
                <Redirect to='/chat' />
            )
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
        );
    }
}