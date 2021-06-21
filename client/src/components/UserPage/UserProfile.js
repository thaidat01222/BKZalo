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
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        this.handleChangePhonenumber = this.handleChangePhonenumber.bind(this);
        this.onSubmitProfile = this.onSubmitProfile.bind(this);

        this.state = {
            user: cookies.get('user'),
            fullName: '',
            age: '',
            synopsis: '',
            phoneNumber:'',
            username:''
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
                this.setState(response.data[0] )
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

    handleChangeSynopsis(e) {
        this.setState({ synopsis: e.target.value })
    }

    handleChangePhonenumber(e) {
        this.setState({ phoneNumber: e.target.value })
        console.log('phone number', this.state.phoneNumber)
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onSubmitProfile = async(e) =>{
        e.preventDefault();
        if ((this.state.fullName != '') && (this.state.username != '')) {
            const profileEdit = {
                email : this.state.user,
                fullName: this.state.fullName,
                synopsis: this.state.synopsis,
                age: this.state.age,
                username: this.state.username,
                phoneNumber: this.state.phoneNumber
            }
            await axios.post("http://localhost:8000/updateprofile", profileEdit)
            .then(response => {
                console.log(response);
                alert('You have successfully updated your information!')
            })
            .catch(error => {
                console.log(error);
            });
            console.log('onSubmit', profileEdit)
        }

    }


    render() {
        return (
            <div className="panel">

                <div id="inside-panel">
                    <div className="space"></div>
                    <img className="panel-avatar" src={`http://localhost:8000${this.state.avatar}`} />
                    <h1><input type='text' value={this.state.fullName} onChange={this.handleChangeFullname} required/></h1>
                    <p className="synopsis"> <input type='text' className="synopsis-input" value={this.state.synopsis} onChange={this.handleChangeSynopsis} required/></p>
                    <ul>
                        <li><b>Age</b><input id="age" type='text' value={this.state.age} onChange={this.handleChangeAge} /></li>

                        <li><b>Email</b><span id="email">{this.state.email}</span></li>
                        <li><b>Username</b><input id="username" type='text' value={this.state.username} onChange={this.handleChangeUsername}/> </li>
                        <li><b>Phone-number</b><input id="phoneNumber"  value={this.state.phoneNumber} onChange={this.handleChangePhonenumber}/></li>
                    </ul>
                    <button className="edit" onClick={this.onSubmitProfile}><img src='./edit.svg' /></button>
                </div>

            </div>
        )
    }
}