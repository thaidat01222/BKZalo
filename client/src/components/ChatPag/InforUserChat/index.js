import React from 'react';
import './infor.scss';
import { Cookies } from 'react-cookie';
import axios from 'axios';


const cookies = new Cookies();
export default class InforUserChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: cookies.get('user'),
            currentUser: cookies.get('currentUser'),
            profile: {}
        }
    }
    componentDidMount = async () => {
        console.log('will mount in  infor currentU')
        this.getUserProfile()
    }

    getUserProfile = async () => {
        var user = {
            email: this.state.user,
            currentEmail : this.state.currentUser
        };

        await axios.post("http://localhost:8000/userpartner", user)
            .then(response => {
                console.log('user in infor currentU', response)
                this.setState({ profile: response.data[0] })
            })
            .catch(error => {
                console.log(error);
            });
            console.log('this state in infor currentU', this.state)
    }

    render() {
        return (
            <div className="board">
                <div className="user-profil">
                    <dic className="user-infor">
                        <div className="proflie-avt">
                            <img src={`http://localhost:8000${this.state.profile.avatar}`} />
                        </div>
                        <h3 className="profile-user-name">
                            {this.state.profile.fullName}
                        </h3>
                        <div className="active">
                        {this.state.profile.logoutTime}
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
