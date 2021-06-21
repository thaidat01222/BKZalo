import React, { useEffect, useState } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import InforUserChat from '../InforUserChat';
import ToolbarButton from '../ToolbarButton';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import './Messenger.scss';

// const cookies = new Cookies();
// export default function Messenger(props) {
//   const [loadPage, setLoadPage] = useState()
//   const [currentUser, setCurrentUser] = useState(cookies.get('currentUser'))
//   const [button, setButton] = useState(false);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setLoadPage(false)
//     getMessages();
//       return () => {
//         console.log('un mount')
//       }
//   }, [loadPage])
//   console.log('loadpage messenger', "message: ", messages)

//   const getMessages = async () => {
//     console.log('get message', messages)
//     const user = {
//       fromEmail: cookies.get('user'),
//       toEmail: currentUser
//     }
//     setMessages([])
//     await axios.post('http://localhost:8000/historymessage', user)
//       .then(response => {
//         const mess = response.data;
//         let tempMessages = mess.map((result, index) => {
//           return {
//             id: index,
//             author: result.fromEmail,
//             message: result.content,
//             timestamp: result.sentTime
//           };
//         });
//         setMessages(tempMessages)
//       })


//       .catch(error => {
//         console.log(error);
//       });
//   }
//   const getInformation = () => {
//     console.log('get infor')
//     if (button == false)  {
//       document.querySelector('.infor-user-chat').style.display = 'block';
//       document.querySelector('.content').style.width = '53vw';
//       setButton(true)
//     }
//     else {
//       document.querySelector('.infor-user-chat').style.display = 'none';
//       document.querySelector('.content').style.width = '77vw';
//       setButton(false)
//     }
//   }
//   return (
//     <div className="messenger">
//       <div className="scrollable sidebar">
//         <ConversationList
//           currentUser={[ currentUser, setCurrentUser ]}
//           loadPage = {[ loadPage, setLoadPage ]}
//         />
//       </div>

//       <div className="scrollable content">
//         <MessageList 
//           currentUser = { currentUser }
//           loadPage = {[ loadPage, setLoadPage ]} 
//           messages = {messages}
//         />

//         <div className="button-inf" onClick={getInformation}>
//           <ToolbarButton key="info" icon="information" />
//         </div>
//       </div>

//       <div className="infor-user-chat">
//         <InforUserChat 
//           currentUser = { currentUser }
//           loadPage = { loadPage }
//         />
//       </div>
//     </div>
//   );
// }


const cookies = new Cookies();
export default class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.setLoadPage = this.setLoadPage.bind(this);

    this.state = {
      currentUser: cookies.get('currentUser'),
      button: false,
      loadPage: false,
      messages: []
    }
  }
  // console.log('loadpage messenger', "message: ", messages)

  shouldComponentUpdate(nextState) {
    console.log('load messenger should update', (this.state.loadPage == true))
    //|| (nextState.messages != this.state.messages)
    if ((this.state.loadPage == true))
      return true;
  }

  componentDidMount() {
    console.log('load messenger did mount')
  }

  componentDidUpdate = async () => {
    console.log('load messenger did update')
    await this.setState({ loadPage: false })

  }

  componentWillMount = async () => {
    console.log('load messenger will mount')
    await this.getMessages(cookies.get('user'), this.state.currentUser);
  }

  getMessages = async (user1, user2) => {
    console.log('load messenger get message')
    const user = {
      fromEmail: user1,
      toEmail: user2
    }
    await this.setState({ messages: [] })
    await this.setState({ loadPage: true })
    await axios.post('http://localhost:8000/historymessage', user)
      .then(response => {
        const mess = response.data;
        let tempMessages = mess.map((result, index) => {
          return {
            id: index,
            author: result.fromEmail,
            message: result.content,
            timestamp: result.sentTime
          };
        });
        this.setState({ messages: tempMessages })
      })
      .catch(error => {
        console.log(error);
      });
    console.log('get message', this.state.messages)
  }
  getInformation = () => {
    console.log('get infor')
    if (this.state.button == false) {
      document.querySelector('.infor-user-chat').style.display = 'block';
      document.querySelector('.content').style.width = '53vw';
      this.setState({ button: true })
    }
    else {
      document.querySelector('.infor-user-chat').style.display = 'none';
      document.querySelector('.content').style.width = '77vw';
      this.setState({ button: false })
    }
  }

  setCurrentUser = async (user) => {
    this.setState({ currentUser: user })
    console.log('load messenger set current', this.state.currentUser, user)

  }

  setLoadPage = async (e) => {
    this.setState({ loadPage: e })
    console.log('load messenger set loadpage', this.state.loadPage, e)

  }

  render() {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            loadPage={this.state.loadPage}
            setLoadPage={this.setLoadPage}
            getMessages = {this.getMessages}
          />
        </div>

        <div className="scrollable content">
          <MessageList
            currentUser={this.state.currentUser}
            loadPage={this.state.loadPage}
            setLoadPage={this.setLoadPage}
            messages={this.state.messages}
          />
 

        <div className="button-inf" onClick={this.getInformation}>
            <ToolbarButton key="info" icon="information" />
          </div>
        </div>

        <div className="infor-user-chat">
          <InforUserChat
            currentUser={this.state.currentUser}
            loadPage={this.state.loadPage}
          />
        </div>
      </div>
    );
  }
}