import io from 'socket.io-client';

import getServerHost from './serverHost';
const serverHost = getServerHost();

var socket;

function getSocketInstance() {
    if (socket == null) {
        socket = io(serverHost);
    }
    return socket;
}

export default getSocketInstance;