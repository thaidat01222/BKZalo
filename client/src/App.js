import './App.css';
import React, {Component} from 'react';

import NavBar from './components/header/NavBar';
import ChatUI from './components/main/ChatUI';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <NavBar/>
                <ChatUI/>
            </div>
        )
    }
}