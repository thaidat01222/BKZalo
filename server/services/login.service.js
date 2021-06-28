const bodyParser = require('body-parser');
const user_model = require('../models/users.model');
const socket_service = require('../services/socket.service');
let socketMap = require('../services/socket.service');
let socketEmailMap = socketMap.socketEmailMap;

exports.login = async (req, res) => {
    console.log("login-service: login")
    let email = req.body.email;
    let password = req.body.password;
    console.log('Login Email and Pass: ', email, password);
    let results = await user_model.findAccByEmailAndPass(email, password);
    console.log('result of findAccByEmailAndPass ', results)
    if (results.length != 0) {
        res.status(200).send(results[0]);
        user_model.updateIsLogin(email);
    } else {
        res.status(401).send('System: Login false');
    }
}

exports.checkLogin = async (req, res) => {
    console.log("login-service: checkLogin")
    let email = req.body.email;
    let check = await user_model.checkIsLogin(email);
    if (check == true) {
        res.status(200).send("System: Tai khoan da dang nhap");
    } else {
        res.status(401).send("System: Tai khoan chua dang nhap");
    }
}

exports.logout = async (req, res) => {
    console.log("login-service: logout")
    let email = req.body.email;
    user_model.updateLogOutTime(email);
    let key_socket_logout = socket_service.getKeyByValue(socketEmailMap, email);
    // console.log('key ',key_socket_logout);
    for (let i = 0; i < key_socket_logout.length; i++) {
        socketEmailMap.delete(key_socket_logout[i]);
    }
    res.status(200).send("System: Tai khoan da logout");
}

exports.signup = async (req, res) => {
    console.log("login-service: signup")
    let account = {
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    }
    let check = await user_model.getUserByEmail(account.email);
    console.log(check);
    if (check.length != 0) {
        res.status(401).send("System: Tai khoan da ton tai");
    } else {
        user_model.signup(account)
        res.status(200).send("System: Dang ky thanh cong");
    }
}