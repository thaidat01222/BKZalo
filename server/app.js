const app = require('express')();
const mysql = require('mysql2/promise');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

var socketIdEmailMap = new Map();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var server = app.listen(port, () => console.log("Server running in port " + port));

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'bkzalo',
    connectionLimit: 100,
    waitForConnections: true
});

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('System: Connected to database');
// });
global.db = db;

app.post('/user', async (req, res) => {
    var email = req.body.email;
    console.log(`System: ${email} muon xem thong tin `);
    if (checkLogin(email) == true) {
        let user_info_sql = `SELECT * FROM users WHERE  email = '${email}'`;
        console.log('DataBase sql', user_info_sql);
        try {
            const [results, field] = await db.query(user_info_sql);
            console.log('Profile user', results);
            res.send(results);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.send("System: Tai khoan chua dang nhap");
    }

})

app.post('/login', async function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    console.log("System: Da nhan account_login " + email + " " + password);
    var sql = "SELECT * FROM `users`"
    try {
        const [results, field] = await db.query(sql)
        var count = 0;
        for (i = 0; i < results.length; i++) {
            if ((email != results[i].email) || (password != results[i].password)) {
                count++;
            }
        }
        if (count == results.length) {
            console.log("System: Login Sai thong tin");
            res.status(401).send("Sai thong tin");
        }
        for (i = 0; i < results.length; i++) {
            if ((email == results[i].email) && (password == results[i].password)) {
                res.status(200).json(results[i]);
                console.log("System: Login thanh cong")
                var isLogin_sql = `UPDATE users SET isLogin = 1, logoutTime = Now() - Now() WHERE id =  '${results[i].id}'`;
                try {
                    db.query(isLogin_sql)
                } catch (err) {
                    console.log(err);
                }

            }
        }
    } catch (err) {
        console.log(err);
    }

})

async function checkLogin(email) {
    var account_login_sql = `SELECT isLogin FROM users WHERE  email = "${email}"`;
    console.log('System: sql_login ' + account_login_sql);
    try {
        const [results, field] = await db.query(account_login_sql);
        //console.log(results[0].isLogin)
        console.log(`System: islogin cua ${email} tren csdl: `, results);
        if (results[0].isLogin == 1) {
            console.log(`System: isLogin cua ${email} = true`);
            return true;
        }
        else {
            console.log("false");
            return false;
        }
    } catch (err) {
        console.log(err);
    }

}


// async function checkLogin(email, res) {
//     var account_login_sql = `SELECT isLogin FROM users WHERE  email = "${email}"`;
//     console.log('System: sql_login '+account_login_sql);
//     try {
//         const [results, field] = await db.query(account_login_sql);
//         //console.log(results[0].isLogin)
//         console.log(`System: islogin cua ${email} tren csdl: `,results);
//         if (results[0].isLogin == 1) {
//             console.log(`System: isLogin cua ${email} = true`);
//             res.status(200).send("Account Da Dang Nhap");

//         }
//         else {
//             console.log("false");
//             res.status(400).send("Accoutn Chua Dang Nhap");
//         }
//         if (results.length == 0) {
//             res.status(400).send("Account ko ton tai hoac user Chua Dang Nhap");
//             return
//         }
//     } catch (err) {
//         console.log(err);
//     }

// }


app.post('/checklogin', (req, res) => {
    console.log("System: Check Login")
    var email = req.body.email;
    if (checkLogin(email)) {
        res.status(200).send("Account Da Dang Nhap");
    } else {
        res.status(401).send("Accoutn Chua Dang Nhap");
    }
})

// app.post('/checklogin', (req, res) => {
//     console.log("System: Check Login")
//     var email = req.body.email;
//     checkLogin(email, res)
// })

app.post('/checkOnline', (req, res) => {
    email = req.body.email;
    console.log(email);
    let check = checkOnline(email);
    if (check) {
        console.log("Check Online: true");
    }
    else {
        console.log("Check Online: false");
    }
})

async function userInfoListChat(sql,messageID){
    let listUser = {
        email: '',
        userName: '',
        avatar: '',
        lastMess: ''
    }
    try {
        const [resultsInfor, field] = await db.query(sql);
        console.log('Database: ResultInfor: ',resultsInfor);
        listUser.email = resultsInfor[0].email;
        listUser.userName = resultsInfor[0].username;
        listUser.avatar = resultsInfor[0].avatar;

    } catch (err) {
        console.log(err);
    }
    try{
        let lastMess = `SELECT content FROM message WHERE messageID = '${messageID}'`;
        const [resultsLastmess, field] = await db.query(lastMess);
        console.log('Database: lastMessID :',resultsLastmess);
        listUser.lastMess = resultsLastmess[0].content;
    }catch(err){
        console.log(err)
    }
    console.log('System: UserInfo ', listUser);
    return listUser;
}

app.post('/listUser', async (req, res) => {
    let email = req.body.email;
    let lastchat_sql = `SELECT * FROM lastchat WHERE fromEmail = '${email}' OR toEmail = '${email}'`;
    let listUser = [{}];
    try {
        const [results, field] = await db.query(lastchat_sql);
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            let lastMessID = results[i].messageID;
            if (results[i].fromEmail == email) {
                let userInfo_sql = `SELECT (email),(username),(avatar) FROM users WHERE email = '${results[i].toEmail}'`;
                console.log('SQL: userInfo from lastChat: ', userInfo_sql);
                var userInfo = await userInfoListChat(userInfo_sql,lastMessID);
                console.log('userInfo',userInfo)
                listUser[i] = userInfo;
            }else{
                let userInfo_sql = `SELECT (email),(username),(avatar) FROM users WHERE email = '${results[i].fromEmail}'`;
                console.log('SQL: userInfo from lastChat: ', userInfo_sql);
                let userInfo = await userInfoListChat(userInfo_sql,lastMessID);
                listUser[i] = userInfo;
            }
        }
    } catch (err) {
        console.log(err);
    }
    res.send(listUser);

})

function getKeyByValue(map, searchValue) {
    let arrayOfKey = [];
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            arrayOfKey.push(key);
    }
    return arrayOfKey;
}

app.post('/logout', async (req, res) => {
    var email = req.body.email;
    console.log("System: Log out " + email);
    var isLogout_sql = `UPDATE users SET isLogin = 0, logoutTime = Now()  WHERE email =  '${email}'`;
    console.log("System: Sql Logout: " + isLogout_sql)
    try {
        const [results, filed] = await db.query(isLogout_sql)
        let key_socket_logout = getKeyByValue(socketIdEmailMap, email);

        for (let i = 0; i < key_socket_logout.length; i++) {
            socketIdEmailMap.delete(key_socket_logout[i]);
        }
        console.log(socketIdEmailMap);
        res.send("System: Da Logout")

    } catch (err) {
        console.log(err)
    }
    //email
    // timf socket id tuowng ung owr trong scoketidemailMap
    //delete no
})

function checkOnline(email) {
    let temp = getKeyByValue(socketIdEmailMap, email)
    let isOnline = temp.length;
    console.log(isOnline);
    if (isOnline != 0) {
        return true
    } else {
        return false
    }
}

async function checkLastMessageExist(emailA, emailB) {
    var check = false;
    let lastMessage_sql = `SELECT (fromEmail), (toEmail) FROM lastchat WHERE (fromEmail = '${emailA}' AND toEmail = '${emailB}') OR (fromEmail = '${emailB}' AND toEmail = '${emailA}')`;
    try {
        const [results, field] = await db.query(lastMessage_sql)
        console.log('syss result: ', results);
        if (results.length != 0) {
            console.log("System: lastchat ton tai");
            check = true;
        } else {
            console.log("System: lastchat nullllll")
            check = false;
        }
    } catch (err) {
        console.log(err)
        return false
    }

    console.log('System: result checklastmessage: ' + check)
    return check;
}
async function saveMessageToDatabase(message, status) {
    var messageId;
    try {
        const sendMessage_sql = `INSERT INTO message(fromEmail, toEmail, content, contentType, sentTime, status) VALUES ('${message.fromEmail}','${message.toEmail}','${message.content}','${message.contentType}', NOW(), '${status}')`;
        console.log("System: SQL save mess: " + sendMessage_sql);
        const [result, fields] = await db.execute(sendMessage_sql);
        console.log(result);
        messageId = result.insertId;
        console.log("System: Da insert message va messageID=" + messageId);
    } catch (err) {
        console.log(err)
        return
    }
    let lastMessage_sql = '';
    let checkLastMessage = await checkLastMessageExist(message.fromEmail, message.toEmail);
    if (checkLastMessage) {
        console.log('System: Lastchat ton tai nen phai update');
        lastMessage_sql = `UPDATE lastchat SET fromEmail='${message.fromEmail}', toEmail='${message.toEmail}', messageID='${messageId}',sentTime=NOW() WHERE (fromEmail='${message.fromEmail}' AND toEmail='${message.toEmail}') OR (fromEmail='${message.toEmail}' AND toEmail='${message.fromEmail}') `;
        try {
            const result = await db.query(lastMessage_sql)
        }
        catch {
            console.log(err);
            return
        }

    } else {
        console.log("System: Lastchat ko ton tai nen phai insert")
        lastMessage_sql = `INSERT INTO lastchat(fromEmail, toEmail, messageID) VALUES('${message.fromEmail}','${message.toEmail}','${messageId}')`;
        try {
            const [results, field] = await db.query(lastMessage_sql);
            console.log("System: Da Insert lastchat ");

        } catch {
            console.log(err);
        }
    }

}

app.post('/sendmessage', (req, res) => {
    let message = {
        fromEmail: req.body.fromEmail,
        toEmail: req.body.toEmail,
        content: req.body.content,
        contentType: req.body.contentType
    }
    console.log("System: mess: " + JSON.stringify(message));
    var status = '';
    if (checkOnline(message.toEmail)) {
        status = 'received';
        saveMessageToDatabase(message, status);
        emitMessage(message);
    } else {
        status = 'sent';
        saveMessageToDatabase(message, status)
    }
    res.status(200).send("Gui tin nhan thanh coong");
})

function emitMessage(message) {
    var toEmail = message.toEmail
    var socketList = getKeyByValue(socketIdEmailMap, toEmail) //[1,5]
    // var clientConnectedList = io.sockets.clients(); //1,2,3,4,5,6,7,8,9,10...
    // console.log("Socket: list user online "+clientConnectedList)
    // clientConnectedList.forEach(element => {
    //     if (socketList.includes(element)) {
    //         element.emit('received-message', message)
    //     }
    // });

}
app.post('/historymessage', async (req, res) => {
    var email = req.body.email;
    // var toEmail = req.params.toEmail
    let historyMessage_sql = `SELECT * FROM message WHERE (fromEmail='${email}') OR (toEmail='${email}') ORDER BY sentTime`;
    console.log("Sql: historymessage : ", historyMessage_sql);
    try {
        const [results, field] = await db.query(historyMessage_sql);
        res.send({ historyMessage: results });
        console.log(`Database: history mess cua ${email}`, results);
    }
    catch (err) {
        console.log(err)
    }
})

// app.get('/historymessage/:fromEmail/:toEmail', (req, res) => {
//     var fromEmail = req.params.fromEmail;
//     var toEmail = req.params.toEmail
//     let historyMessage_sql = `SELECT * FROM message WHERE (fromEmail='${fromEmail}' AND toEmail='${toEmail}') OR (fromEmail='${toEmail}' AND toEmail='${fromEmail}') ORDER BY sentTime`;
//     db.query(historyMessage_sql, (err, results) => {
//         if (err) { throw err }
//         res.send({ historyMessage: results });
//         console.log(results);
//     })
// })

app.post('/signup', async function (req, res) {
    console.log('System: Da nhan sign up');
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    console.log(username + " " + email + " " + password);

    var sql_check = "Select email from `users`";
    var sql_insert = `INSERT INTO users(username, password, email) VALUES ("${username}","${password}","${email}")`;
    try {
        const [results, field] = await db.query(sql_check)
        console.log(results);
        var check = true;
        for (i = 0; i < results.length; i++) {
            if ((email == results[i].email)) {
                console.log(results[i])
                check = false;
                res.status(401).send("System: Email da ton tai");
            }
        }
        if (check) {
            try {
                const [results, field] = await db.query(sql_insert)
                res.status(200).send("System: Dang ky thanh cong");
                console.log("System: Da insert vào database")
            } catch (err) {
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }

})

app.post('/updateprofile', async (req, res) => {
    email = req.body.email;
    fullName = req.body.fullname;
    synopsis = req.body.synopsis;
    age = req.body.age;
    phoneNumber = req.body.phoneNumber;
    userName = req.body.username;
    if (checkLogin(email) == true) {
        let update_user_sql = `UPDATE users SET fullName = '${fullName}', synopsis = '${synopsis}',age = '${age}', phoneNumber = '${phoneNumber}', username = '${userName}' WHERE email = ${email}`;
        console.log("SQL: update_user_sql : ", update_user_sql);
        try {
            const [results, field] = await db.query(update_user_sql);
            console.log("Database: Update account :", results);
            res.send("System: Update thanh cong");
        } catch (err) {
            console.log(err);
            res.send("System: Update loi!!!")
        }
    } else {
        res.send("System: Please login to update profile");
    }

})

io.on("connection", (socket) => { ///Handle khi có connect từ client tới
    console.log("Socket: New client connected " + socket.id);
    socket.on("list-online", function (data) {
        socketIdEmailMap.set(socket.id, data);
        console.log(socketIdEmailMap);
        console.log("Socket: just sent " + data);
        socket.emit("list-online", "Socket-server: OK");
    })

    socket.on("sendData", data => {
        console.log("mess from A " + data);
        let toEmail = getKeyByValue(socketIdEmailMap, data.toEmail);
        console.log("Socket: toEmail: ", toEmail[0]);
        console.log("Socket: content: ", data.content);
        socket.broadcast.to(toEmail[0]).emit('receiveData', data.content);
    });

    socket.on("disconnected", function (data) {
        socketIdEmailMap.delete(socket.id)
        console.log("Socket: just disconnected " + data);
    })
});

// io.on("connection", function (socket) {
//     console.log(socket.id + ": connected");
//     socket.on("sendData", data => {
//         socketIdEmailMap.set(socket.id,data.fromEmail);
//         console.log(socketIdEmailMap);
//         let to = getKeyByValue(socketIdEmailMap, data.toEmail);
//         console.log(to[0]);
//         socket.broadcast.to(to[0]).emit('receiveData',data.content);
//     });

//     // socket.on('join-room', (roomId, userId) =>{
//     //     socket.join(roomId);
//     //     socket.broadcast.to(roomId).emit('user-connected', userId);

//     // })
//     socket.on("disconnect", function () {
//         console.log(socket.id + ": disconnected");
//         socketIdEmailMap.delete(socket.id);
//         console.log(socketIdEmailMap);
//     });
//     // var sendData = 'Server: sendData'


// });