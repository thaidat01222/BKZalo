import React from 'react';
import './navbar.css';

import getServerHost from '../serverHost';
const serverHost = getServerHost();

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            endpoint: serverHost+'/'
        };
    }

    render() {
        return (
            <div className="nav-bar">
                <a className="nar-bar-left" href="http://localhost:3000/">
                    <div className="logo">
                        <img src='./logo.png' />
                    </div>
                    <div className="bkzalo">
                        <img src='./bkzalo.png' />
                    </div>
                </a>
                <div className="nar-bar-center"></div>
                <div className="nar-bar-right"></div>
            </div>
        );
    }
}

export default NavBar;