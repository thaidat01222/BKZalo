let socket_service  = require('../services/socket.service');
let socketEmailMap = socket_service.socketEmailMap;

exports.socket = (io) => {
    io.on("connection", (socket) => { ///Handle khi có connect từ client tới
        console.log("Socket: New client connected " + socket.id);
        socket.on("list-online", function (email) {
            socketEmailMap.set(socket, email);
            // console.log('map socketID', socketEmailMap);
            console.log("Socket: just sent " + email);
            socket.emit("list-online", "Socket-server: OK");
        })

        socket.on("disconnected", function (email) {
            socketEmailMap.delete(socket)
            console.log("Socket: just disconnected " + email);
        })
    });

}