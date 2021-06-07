import React from 'react';
import './navbar.css';
import socketIOClient from 'socket.io-client';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: 'http://localhost:8000'
        }   
    }
    // socket = socketIOClient(this.state.endpoint);
    render () {
        return (
            <div className="nav-bar">
                <div className="nar-bar-left">
                    <div className="logo">
                        <img src='./logo.png' />
                    </div>
                    <div className="bkzalo">
                        <img src='./bkzalo.png' />
                    </div>
                </div>
                <div className="nar-bar-center"></div>
                <div className="nar-bar-right"></div>
            </div>
        )
    }
}