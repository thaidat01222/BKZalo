import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {useCookies} from 'react-cookie';

import NavBar from './components/header/NavBar';
import ChatUI from './components/ChatPage/ChatUI';
import Login from './components/LoginPage/Login';
import UserProfile from './components/UserPage/UserProfile';

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/' component={NavBar} />
                <Route exact path='/id' component={ChatUI} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/user' component={UserProfile} />
            </BrowserRouter>
        )
    }
}