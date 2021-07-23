exports.socketEmailMap = new Map();

exports.notifyHasNewSocketId = (id) => {
    console.log("Socket: New client connected " + id);
}

exports.setEmailMapID = (socket, data) => {
    this.socketEmailMap.set(socket, data);
    // console.log('map socketID', this.socketEmailMap);
    socket.emit("list-online", "Socket-server: OK");
}

// exports.sendMessage = (socket, data) => {
//     console.log("mess from A " + data);
//     let toEmail = this.getKeyByValue(this.socketEmailMap, data.toEmail);
//     console.log("Socket: toEmail: ", toEmail[0]);
//     console.log("Socket: content: ", data.content);
//     socket.broadcast.to(toEmail[0]).emit('receive-message', data.content);
// };

exports.disconnected = (socket, data) => {
    this.socketEmailMap.delete(socket)
    console.log("Socket: just disconnected " + data);
}

exports.emitMessage = async (message) => {
    try {
        console.log("socket-service: emitMessage ")
        let toEmail = message.toEmail
        let socketList = this.getKeyByValue(this.socketEmailMap, toEmail) //[1,5]
        console.log("socketList",socketList);
        // let clientConnectedList = await findClientsSocket(); //1,2,3,4,5,6,7,8,9,10...
        console.log("Socket: list user online " + socketList)
        socketList.forEach(element => {
            if (socketList.includes(element)) {
                element.emit('received-message', message)
            }
        });
    } catch (err) {
        console.log(err)
    }
}

exports.checkOnline = (email) => {
    console.log("socket-service: checkOnline ")
    let temp = this.getKeyByValue(this.socketEmailMap, email)
    let isOnline = temp.length;
    console.log(isOnline);
    if (isOnline != 0) {
        return true
    } else {
        return false
    }
}

exports.getKeyByValue = (map, searchValue) => {
    console.log("socket-service: getKeyByValue ")
    let arrayOfKey = [];
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            arrayOfKey.push(key);
    }
    return arrayOfKey;
}
function findClientsSocket(roomId, namespace) {
    var res = []
        // the default namespace is "/"
        , ns = io.of(namespace || "/");

    if (ns) {
        for (var id in ns.connected) {
            if (roomId) {
                var index = ns.connected[id].rooms.indexOf(roomId);
                if (index !== -1) {
                    res.Push(ns.connected[id]);
                }
            } else {
                res.Push(ns.connected[id]);
            }
        }
    }
    return res;
}
