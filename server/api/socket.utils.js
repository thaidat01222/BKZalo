// const socket_service = require('../services/socket.service');
// exports.socket = (io) => {
//     io.on("connection", (socket) => { ///Handle khi có connect từ client tới
//         socket_service.notifyHasNewSocketId(socket.id);// Thông báo có new socketID
//         socket.on("list-online", (data) => {
//             socket_service.setEmailMapID(socket, data);
//         });

//         socket.on("receive-message", (data) => {
//             socket_service.sendMessage(socket, data);
//         });

//         socket.on("disconnected", (data) => {
//             socket_service.disconnected(socket, data);
//         });
//     });

// }
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

        // socket.on("sendData", data => {
        //     console.log("mess from A " + data);
        //     let toEmail = getKeyByValue(socketEmailMap, data.toEmail);
        //     console.log("Socket: toEmail: ", toEmail[0]);
        //     console.log("Socket: content: ", data.content);
        //     socket.broadcast.to(toEmail[0]).emit('receiveData', data.content);
        // });

        socket.on("disconnected", function (email) {
            socketEmailMap.delete(socket)
            console.log("Socket: just disconnected " + email);
        })
    });

}