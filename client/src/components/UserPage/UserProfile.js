import React from 'react';
import './userprofile.scss'

export default class UserProfile extends React.Component {
    render() {
        return (
            <div class="panel">

                <div id="inside-panel">
                    <div class="space"></div>
                    <img src='	https://randomuser.me/api/portraits/men/35.jpg' />
                    <h1>Guadalberto Souza</h1>
                    <p>Love you to the moon and back!!!</p>
                    <ul>
                    <li><b>Age</b><span id="age">21</span></li>

                        <li><b>Email</b><span id="email">a@gmail.com</span></li>
                        <li><b>Username</b><span id="title">abc123</span></li>
                        <li><b>Phone-number</b><span id="website">0123456789</span></li>
                    </ul>
                    <div class="edit"><img src='./edit.svg'/></div>
                </div>

            </div>
        )
    }
}