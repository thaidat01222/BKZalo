import React from 'react'
import {socket} from '../header/NavBar'
import { useCookies, Cookies, CookiesProvider } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userInfo: {},
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

    shouldComponentUpdate (nextState) {
        console.log("shouldComponentUpdate")
        if ((nextState.redirect !== this.state.redirect)) return true;
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

    render() {
        console.log("user in here")
        this.checkAuth(cookies.get('user'), cookies.get('pass'));
        console.log("state in render", this.state)

        if ( this.state.redirect === true ) {
            return (<div>da dang nhap</div>)
        } else return (
            <div>chua dang nhap</div>
        )
    }
}