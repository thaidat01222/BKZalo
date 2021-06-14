import React from 'react';
import io from 'socket.io-client';
var socket 
// function SocketIOClient(props) {
//     if (socket == null) {
//         socket = io("http://localhost:8000")
//     }
// }

 function getSocketInstance(){
    if (socket == null) {
        socket = io("http://localhost:8000")
    }
    return socket
}

export default getSocketInstance
