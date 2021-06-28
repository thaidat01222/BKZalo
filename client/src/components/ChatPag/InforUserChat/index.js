import React, { useEffect, useState } from 'react';
import './infor.scss';
import { Cookies } from 'react-cookie';
import axios from 'axios';


const cookies = new Cookies();
export default function InforUserChat(props) {
    const [profile, setProfile] = useState([]);
    const currentUser = props.currentUser;
    const loadPage = props.loadPage;
    
    useEffect(() => {
        getUserProfile();
    }, [currentUser])

    const getUserProfile = async () => {
        console.log('get infor user')
        var getUser = {
            email: cookies.get('user'),
            currentEmail: cookies.get('currentUser')
        };
        await axios.post("http://localhost:8000/userpartner", getUser)
            .then(response => {
                console.log('user in infor currentU', response)
                let newData = response.data[0];
                setProfile(newData)
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="board">
            <div className="user-profil">
                <dic className="user-infor">
                    <div className="proflie-avt">
                        <img src={`http://localhost:8000${profile.avatar}`} />
                    </div>
                    <h3 className="profile-user-name">
                        {profile.fullName}
                    </h3>
                    <div className="active">
                        {profile.logoutTime}
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
