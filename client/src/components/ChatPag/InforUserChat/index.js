import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import './infor.scss';

import getServerHost from '../../serverHost';
const serverHost = getServerHost();
console.log(serverHost);
const cookies = new Cookies();

export default function InforUserChat(props) {
    const [profile, setProfile] = useState([]);
    const [fileShare, setFileShare] = useState([]);
    const currentUser = props.currentUser;
    const loadPage = props.loadPage;

    useEffect(() => {
        getUserProfile();
        getFileShare();
    }, [currentUser])

    useEffect(() => {
        getFileShare();
    }, [loadPage])

    const getUserProfile = async () => {
        var getUser = {
            email: cookies.get('user'),
            currentEmail: cookies.get('currentUser')
        };
        await axios.post(serverHost+"/userpartner", getUser)
            .then(response => {
                let newData = response.data[0];
                console.log('profile user', newData)
                setProfile(newData)
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getFileShare = async () => {
        var getFile = {
            fromEmail: cookies.get('user'),
            toEmail: cookies.get('currentUser')
        };

        await axios.post(serverHost+"/imageshared", getFile)
            .then(response => {
                let newData = response.data;
                setFileShare(newData);
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
                        <img src={serverHost+`${profile.avatar}`} />
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
                        <i>{profile.email}</i>
                    </div>
                    <div className="set-c ignore">
                       <i>{profile.phoneNumber}</i>
                    </div>
                    <div className="set-c block">
                        <i> {profile.synopsis}</i>
                    </div>
                </div>
                <div className="file-shared">
                    <b>File shared</b>
                    <div className='file-shares' >
                        {fileShare.map(file => {
                            return (
                                <div className="file-share">
                                    <img className="image-share" src={serverHost+`${file.image}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
