import React from 'react';
import './chat-ui.css';

export default class ChatUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render() {
        const list = this.state.list;
        return (
            <div className="ChatUI">
                <div className="chat-list">
                    <div className="chat-list-head">
                        <img src='./plus.svg' className="ico-plus" />
                    </div>
                    <div className="chat-list-main">
                        <div className="cl-main chat-list-title">
                            Chats
                        </div>
                        <div className="cl-main chat-search">
                            <input className="chat-search-form" placeholder="Search" />
                                <img src='./loupe.svg' />
                        </div>
                        <div className="list-users">
                            {list.map((key, index) => {
                                console.log("list user", key, index)
                                return (
                                    <div key="index" className="chats-user">
                                        <div className="avt-user">
                                            <img src={key.avt} />
                                        </div>
                                        <div className="user">{key.user}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="chat-content">
                    <div className="user-chatting">
                        <div className="user-name">
                            User Chatting
                        </div>
                        <button className="btn-setting">
                            <img src='./settings.svg' />
                        </button>
                    </div>
                    <div className="message">

                    </div>
                    <div className="chat-box">
                        <div className="">
                            <button className="btn-chat-box btn-more">
                                <img src="./more.svg" />
                            </button>
                            <button className="btn-chat-box btn-photo">
                                <img src='./gallery.svg' />
                            </button>
                            <button className="btn-chat-box btn-stick">
                                <img src='./sticker.svg' />
                            </button>
                        </div>
                        <input type="text" className="chat-box-input" />
                        <button className="btn-chat-box btn-send">
                            <img src='./send.svg' />
                        </button>
                    </div>
                </div>
                <div className="user-profile">
                    <dic className="user-infor">
                        <div className="proflie-avt">
                            <img src='./avt.svg' />
                        </div>
                        <h3 className="profile-user-name">
                            User name
                        </h3>
                        <div className="active">
                            Active 2 h ago
                        </div>
                    </dic>
                    <div className="setting-chat">
                        <div className="set-c mute-conversation">
                            <img src='./noti-chat.svg' />
                            Mute conversation
                        </div>
                        <div className="set-c ignore">
                            <img src='./stop.svg' />
                            Ignore message
                        </div>
                        <div className="set-c block">
                            <img src='./block.svg' />
                            Block
                        </div>
                        <div className="set-c report">
                            <img src='./warning.svg' />
                            Something's wrong
                        </div>
                    </div>
                    <div className="file-shared">
                            File shared
                    </div>
                </div>
            </div>
        )
    }
}