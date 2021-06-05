import React from 'react';
import './userprofile.scss'

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="user-profile">
                <div className="header-form">
                    <div className="header-form-left">
                        <img src='./user.svg' />
                    </div>
                    <div className="header-form-right">
                        <button className="btn-save">
                            <img src='./checked.svg' />
                            Save
                        </button>
                    </div>
                </div>
                <div class="main-content">
                    <div className="header-content">
                        <div className="avt-area">
                            <img src='./user.svg' />
                        </div>
                        <div className="name-area">
                            <h2>John Dat</h2>
                            <p>abc@xyz.com</p>
                        </div>
                    </div>
                    <div className="profile-acc" >
                        <h3>Account</h3>
                        <div>
                            <label for="username">Username</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input placeholder="abc@xyz.com" />
                            </div>
                            <div>
                                <label >Fullname</label>
                                <input type="text" placeholder="John Dat" /></div>
                            <div>
                                <label>Phone Number</label>
                                <input type="number" placeholder="" /></div>

                        </div>
                    </div>
                </div>

        )
    }
}