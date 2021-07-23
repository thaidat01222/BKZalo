import React from 'react';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export default class InputNewChat extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getMessages = this.props.getMessages;
        this.setCurrentUser = this.props.setCurrentUser;
        this.state = {
            newChat: props.newChat,
            input: ''
        };
    }

    handleInput(e) {
        this.setState({ input: e.target.value })
        console.log('new chat', this.state.input, this.props.newChat)

    }

    handleClick = async (user, fullname) => {
        await this.setState({ input: '' });
        cookies.set('currentUser', user);
        cookies.set('currentUserFullname', user);
        await this.getMessages(cookies.get('user'), user);
        await this.setCurrentUser(user);

        document.querySelector('.add-chat').style.display = 'none';
        document.querySelector('.conversation-list-items').style.display = 'block';
        document.querySelector('.conversation-search').style.display = 'block';
    }


    render() {
        const plus = this.state.input.toUpperCase();
        return (
            <div className="add-chat">
                <div>
                    <div className="new-chat-input">
                        <input className="form-input-new-chat" type="text" onChange={this.handleInput}
                            placeholder="Search" />
                    </div>

                </div>
                <div className="list-add">
                    {this.props.newChat.map(value => {
                        if ((value.email.toUpperCase().indexOf(plus) > -1)
                            && (plus !== '')) {
                            return (
                                <div className="list-add-item" onClick={e => this.handleClick(value.email)} >
                                    {value.email}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}