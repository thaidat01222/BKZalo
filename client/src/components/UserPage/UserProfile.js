import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import './userprofile.scss';


const cookies = new Cookies();

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeFullname = this.handleChangeFullname.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        this.handleChangePhonenumber = this.handleChangePhonenumber.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.onSubmitProfile = this.onSubmitProfile.bind(this);

        this.state = {
            id: '',
            user: cookies.get('user'),
            fullName: '',
            age: '',
            synopsis: '',
            phoneNumber: '',
            username: '',
            avatar: null,
            avt: ''
        };

        this.inputOpenFileRef = React.createRef();
    }

    componentDidMount = async () => {
        this.getUserProfile();
    }

    getUserProfile = async () => {
        let user = {
            email: this.state.user
        };

        await axios.post("http://localhost:8000/user", user)
            .then(response => {
                let profile = {
                    id: response.data[0].id,
                    email: response.data[0].user,
                    fullName: response.data[0].fullName,
                    synopsis: response.data[0].synopsis,
                    age: response.data[0].age,
                    username: response.data[0].username,
                    phoneNumber: response.data[0].phoneNumber,
                    avatar: 'http://localhost:8000' + response.data[0].avatar,
                    avt: response.data[0].avatar
                }
                this.setState(profile);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleChangeFullname(e) {
        this.setState({ fullName: e.target.value });
    }

    handleChangeAge(e) {
        this.setState({ age: e.target.value });
    }

    handleChangeSynopsis(e) {
        this.setState({ synopsis: e.target.value });
    }

    handleChangePhonenumber(e) {
        this.setState({ phoneNumber: e.target.value });
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleChangeImage = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ avatar: reader.result });
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    onSubmitProfile = async (e) => {
        e.preventDefault();
        if ((this.state.fullName !== '') && (this.state.username !== '')) {
            console.log('test', this.state.avt, this.state.avatar.slice(21))
            if (this.state.avt === this.state.avatar.slice(21)) {
                let profileEdit = {
                    id: this.state.id,
                    avatar: this.state.avt,
                    email: this.state.user,
                    fullName: this.state.fullName,
                    synopsis: this.state.synopsis,
                    age: this.state.age,
                    username: this.state.username,
                    phoneNumber: this.state.phoneNumber
                };
                console.log('test 2', profileEdit)
                await axios.post("http://localhost:8000/updateprofile", profileEdit)
                    .then(response => {
                        console.log(response);
                        alert('You have successfully updated your information!')
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                let profileEdit = {
                    id: this.state.id,
                    avatar: this.state.avatar,
                    email: this.state.user,
                    fullName: this.state.fullName,
                    synopsis: this.state.synopsis,
                    age: this.state.age,
                    username: this.state.username,
                    phoneNumber: this.state.phoneNumber
                };
                console.log( profileEdit)
                await axios.post("http://localhost:8000/updateprofile", profileEdit)
                    .then(response => {
                        alert('You have successfully updated your information!')
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }

    }

    showOpenFile = () => {
        this.inputOpenFileRef.current.click();
    }

    render() {
        const picture = this.state.avatar;
        return (
            <div className="panel">

                <div id="inside-panel">
                    <div className="space"></div>
                    <div className="panel-avatar">
                        <img className="avatar" src={picture} />
                        <input ref={this.inputOpenFileRef} type="file" style={{ display: "none" }} name="myImage" accept="image/*" onChange={this.handleChangeImage}
                        />
                        <button onClick={this.showOpenFile}><img src='./photo-camera.svg' /></button>
                    </div>
                    <h1>
                        <input type='text' value={this.state.fullName} onChange={this.handleChangeFullname} required />
                    </h1>
                    <p className="synopsis">
                        <input type='text' className="synopsis-input" value={this.state.synopsis} onChange={this.handleChangeSynopsis} required />
                    </p>
                    <ul>
                        <li>
                            <b>Age</b>
                            <input id="age" type='text' value={this.state.age} onChange={this.handleChangeAge} />
                        </li>

                        <li>
                            <b>Email</b>
                            <span id="email">{this.state.user}</span>
                        </li>
                        <li>
                            <b>Username</b>
                            <input id="username" type='text' value={this.state.username} onChange={this.handleChangeUsername} />
                        </li>
                        <li>
                            <b>Phone-number</b>
                            <input id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChangePhonenumber} />
                        </li>
                    </ul>
                    <button className="edit" onClick={this.onSubmitProfile}><img src='./edit.svg' /></button>
                </div>
            </div>
        )
    }
}