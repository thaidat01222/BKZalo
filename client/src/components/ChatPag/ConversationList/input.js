import React from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';
// import './MessageList.css';



const cookies = new Cookies();

export default class InputNewChat extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
		this.state = {
			newChat: props.newChat,
			input: ''
		}
	}

	componentWillMount() {
		console.log('new chat will', this.props.newChat)
	}

	handleInput(e) {
		this.setState({ input: e.target.value })
		console.log('new chat', this.state.input, this.props.newChat)

	}




	render() {
		console.log('new chat 1', this.props.newChat)				
		if (this.props.newChat != null){
			
			this.props.newChat.map(value => {

							return (
								<div className="current-user">
									{value.email} 1
									</div>
							)
						})

					}
	
	
		return (
			<div className="form-input-new-chat">
				<div>
					<input type="text" onChange={this.handleInput} />
				</div>

			</div>
		)
	}
}