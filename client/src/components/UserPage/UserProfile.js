import React from 'react';
import './userprofile.scss';
import { Cookies } from 'react-cookie';
import axios from 'axios';



const cookies = new Cookies();

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeFullname = this.handleChangeFullname.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeSysnopsis = this.handleChangeSysnopsis.bind(this);
        this.handleChangePhonenumber = this.handleChangePhonenumber.bind(this);


        this.state = {
            user: cookies.get('user'),
            profile: {}
        }
    }

    // shouldComponentUpdate() {
    //     console.log('should component did mount')
    // }

    componentDidMount = async () => {
        console.log('will mount')
        this.getUserProfile()
    }

    getUserProfile = async () => {
        var user = {
            email: this.state.user
        };

        await axios.post("http://localhost:8000/user", user)
            .then(response => {
                console.log('user', response.data[0])
                this.setState({ profile: response.data[0] })
            })
            .catch(error => {
                console.log(error);
            });
            console.log('this state', this.state)
    }

    handleChangeFullname(e) {
        this.setState({ fullName: e.target.value })
    }

    handleChangeAge(e) {
        this.setState({ age: e.target.value })
    }

    handleChangeSysnopsis(e) {
        this.setState({ sysnopsis: e.target.value })
    }

    handleChangePhonenumber(e) {
        this.setState({ phoneNumeber: e.target.value })
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value })
    }


    render() {
        console.log('render user page', this.state.profile)
        return (
            <div className="panel">

                <div id="inside-panel">
                    <div className="space"></div>
                    <img className="panel-avatar" src={`http://localhost:8000${this.state.profile.avatar}`} />
                    <h1>{this.state.profile.fullName}</h1>
                    <p> <input type='text' value={this.state.profile.sysnopsis} onChange={this.handleChangeSysnopsis} required/></p>
                    <ul>
                        <li><b>Age</b><input id="age" type='text' value={this.state.profile.age} onChange={this.handleChangeAge} required/></li>

                        <li><b>Email</b><span id="email">{this.state.profile.email}</span></li>
                        <li><b>Username</b><input id="title" type='text' value={this.state.profile.username} onChange={this.handleChangeUsername}/> </li>
                        <li><b>Phone-number</b><input id="website" type='text' value={this.state.profile.phoneNumber} onChange={this.handleChangePhonenumber}/></li>
                    </ul>
                    <button className="edit"><img src='./edit.svg' /></button>
                </div>

            </div>
        )
    }
}