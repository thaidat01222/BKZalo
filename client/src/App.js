import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/header/NavBar';
import Login from './components/LoginPage/Login';
import UserProfile from './components/UserPage/UserProfile';
import Chat from './components/ChatPag/ChatPage';
import Footer from './components/Footer/Footer'

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/' component={NavBar} />
                <Route exact path='/' component={Login} />
                <Route exact path='/user' component={UserProfile} />
                <Route path='/chat' component={Chat} />
                <Route exact path={'/'} component={Footer} />
                <Route exact path={'/user'} component={Footer} />
            </BrowserRouter>
        )
    }
}