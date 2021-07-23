import io from 'socket.io-client';

var socket;

function getSocketInstance() {
    if (socket == null) {
        socket = io("http://localhost:8000");
    }
    return socket;
}

export default getSocketInstance;