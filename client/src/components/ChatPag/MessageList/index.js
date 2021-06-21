import React, { useEffect, useState, useRef } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { Route } from 'react-router-dom';
import ReactScrollableFeed from 'react-scrollable-feed';
import { animateScroll } from "react-scroll";
import './MessageList.css';

import getSocketInstance from '../../socket'
const socket = getSocketInstance()

socket.on('received-message', data => {
  console.log(data);
})

const cookies = new Cookies();
const MY_USER_ID = cookies.get('user');

// export default function MessageList(props) {
//   const currentUser = props.currentUser;
//   const [ loadPage, setLoadPage ] = props.loadPage;
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {   
//     getMessages();
//   }, [loadPage])


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

//   const onChangeIsLoad = () => {
//     console.log('submit change')
//     setLoadPage(true)
//   }

//   const renderMessages = () => {
//     let i = 0;
//     let messageCount = messages.length;
//     let tempMessages = [];

//     while (i < messageCount) {
//       let previous = messages[i - 1];
//       let current = messages[i];
//       let next = messages[i + 1];
//       let isMine = current.author === MY_USER_ID;
//       let currentMoment = moment(current.timestamp);
//       let prevBySameAuthor = false;
//       let nextBySameAuthor = false;
//       let startsSequence = true;
//       let endsSequence = true;
//       let showTimestamp = true;

//       if (previous) {
//         let previousMoment = moment(previous.timestamp);
//         let previousDuration = moment.duration(currentMoment.diff(previousMoment));
//         prevBySameAuthor = previous.author === current.author;

//         if (prevBySameAuthor && previousDuration.as('hours') < 1) {
//           startsSequence = false;
//         }

//         if (previousDuration.as('hours') < 1) {
//           showTimestamp = false;
//         }
//       }

//       if (next) {
//         let nextMoment = moment(next.timestamp);
//         let nextDuration = moment.duration(nextMoment.diff(currentMoment));
//         nextBySameAuthor = next.author === current.author;

//         if (nextBySameAuthor && nextDuration.as('hours') < 1) {
//           endsSequence = false;
//         }
//       }

//       tempMessages.push(
//         <Message
//           key={i}
//           isMine={isMine}
//           startsSequence={startsSequence}
//           endsSequence={endsSequence}
//           showTimestamp={showTimestamp}
//           data={current}
//         />
//       );

//       // Proceed to the next message.
//       i += 1;
//     }
//     return tempMessages;
//   }
//   console.log('loagpage message list')
//   console.log('scroll', document.getElementsByClassName('message').scrollHeight)

//   return (
//     <div className="message-list">
//       <div className="toolbar">
//         <Toolbar
//           title={cookies.get('currentUserFullname')}
//           rightItems={[
//             <ToolbarButton key="video" icon="video-player" />,
//             <ToolbarButton key="phone" icon="phone-call" />
//           ]}
//         />
//       </div>

//       <div className="message-list-container">{renderMessages()}</div>

//       <Compose 
//       rightItems={[
//         <ToolbarButton key="emoji" icon="send2" id="send2" />
//       ]} 
//       loadPage = {[loadPage, setLoadPage]}
//       onChangeIsLoad = {onChangeIsLoad}
//       />
//     </div>
//   );
// }






export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleTyping = this.handleTyping.bind(this);
    this.handleSend = this.handleSend.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      loadPage: props.loadPage,
      messages: props.messages,
      currentUser: props.currentUser,
      buttonSend: false,
    }
    this.myRef = React.createRef()
  }

  scrollToBottom() {

    console.log('temp');
    var scrollHeight = this.myRef.current.scrollHeight
    var height = this.myRef.current.clientHeight;
    var maxScr = scrollHeight - height;
    // this.myRef.current.srcollTop = maxScr > 0 ? maxScr : 0;
    this.setState({ scrollTop: maxScr})
    console.log('tempp', this.myRef.current.srcollTop, maxScr, this.myRef.current.offsetTop)
    window.scrollTo(0, scrollHeight);
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('load message-list should update', this.props.loadPage, this.state.buttonSend)
    //   return ((this.props.loadPage[0]) || (nextState.messages !== this.state.messages))
    if ((this.props.loadPage == true)
      // || (nextProps.messages !== this.state.messages) 
      // || (nextState.messages !== this.state.messages)
      || (this.state.buttonSend == true)
    )
      return true
    else return false
    if (this.state.buttonSend == false) return false
  }

  componentDidUpdate = async () => {
    console.log('load message list did update ')
    this.renderMessages();
    this.setState({ buttonSend: false })
    console.log('temppp', this.myRef.current.scrollTop)
    await this.scrollToBottom()
  }
  // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)  
  componentWillMount() {
    console.log('load message list will mount')
    // window.scrollTo(0, this.myRef.current.offsetTop) 
    
    // this.scrollToBottom()
    // this.getMessages();
  }

  handleSend = async (e) => {
    console.log('handesent', this.state.buttonSend)
    this.setState({ buttonSend: true })
    if (e !== '') {
      const message = {
        fromEmail: cookies.get('user'),
        toEmail: cookies.get('currentUser'),
        content: e,
        contentType: 'text',
        sentTime: ''
      }
      // this.props.onChangeIsLoad()
      // socket.emit("sendData",message);
      console.log("Client: message send: " + JSON.stringify(message));
      await axios.post("http://localhost:8000/sendmessage", message)
        .then(response => {
          if (response.status === 200) { }

        })
        .catch(error => {
          console.log(error);
        });
      // this.setState({ typing: ''})
      // e.preventDefault();
      // await this.props.setLoadPage(true);
      var i = 20;
      const me = {
        id: ++i,
        author: cookies.get('user'),
        message: e,
        timestamp: ''
      }
      var preMess = this.state.messages;
      preMess.push(me)
      console.log('abcc', this.state.messages)
    }
  }

  renderMessages = () => {
    let i = 0;
    let messageCount = this.props.messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = this.props.messages[i - 1];
      let current = this.props.messages[i];
      let next = this.props.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }
    return tempMessages;
  }

  render() {
    console.log('load message list', this.state.messages)
    return (
      <div className="message-list">
        <div className="toolbar">
          <Toolbar
            title={cookies.get('currentUserFullname')}
            rightItems={[
              <ToolbarButton key="video" icon="video-player" />,
              <ToolbarButton key="phone" icon="phone-call" />
            ]}
          />
        </div>

        <div className="message-list-container"
          ref={this.myRef}
        >{this.renderMessages()}

        </div>

        <Compose
          rightItems={[
            <ToolbarButton key="emoji" icon="send2" id="send2" />
          ]}
          loadPage={this.props.loadPage}
          // onChangeIsLoad = {this.props.onChangeIsLoad}
          handleSend={this.handleSend}

        />
      </div>
    );
  }
}