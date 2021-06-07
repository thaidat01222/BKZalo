import React, { useEffect, useRef, useState } from 'react';
import './chat-ui.scss';
import io from 'socket.io-client';
import {socket} from '../header/NavBar'

import List from './List'
import Content from './Content';
import Profile from './Profile';
import User from './User';

export default class ChatUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            mess: [
                {
                    userName: "",
                    message: ""
                }
            ],
            list: [
                {
                    avt: './user-man.svg',
                    user: "user1"
                },
                {
                    avt: './user-man.svg',
                    user: "user2"
                },
                {
                    avt: './user-man.svg',
                    user: "user3"
                },
                {
                    avt: './user-man.svg',
                    user: "user4"
                },
                {
                    avt: './user-man.svg',
                    user: "user5"
                },
                {
                    avt: './user-man.svg',
                    user: "user6"
                },
                {
                    avt: './user-man.svg',
                    user: "user7"
                },
                {
                    avt: './user-man.svg',
                    user: "user9"
                },
                {
                    avt: './user-man.svg',
                    user: "user10"
                },
                {
                    avt: './user-man.svg',
                    user: "user11"
                },
                {
                    avt: './user-man.svg',
                    user: "user12"
                },
                {
                    avt: './user-man.svg',
                    user: "user13"
                }
            ]
        }
    }
    // useEffect= () => {
    //     var userName = this.state.mess.userName;
    //     var message = this.state.mess.message;
    //     const [mess, setMess ] = useState({userName:"", message: ""})
    //     const [chat, setChat] = useState([])
    //     socketRef.current = io.connect("http://localhost:4000")
    //     socketRef.current.on("message", ({ name, message }) => {
    //         setChat([...chat, { name, message }])
    //     })
    //     return () => socketRef.current.disconnect()
    
    //     [chat]
    // }
render() {
    return (
        <div className="ChatUI">
            <List
                list={this.state.list} />
            <Content />
            <Profile />
            <User/>
        </div>
    )
}
}