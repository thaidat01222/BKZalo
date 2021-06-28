const bodyParser = require('body-parser');
const user_model = require('../models/users.model');
const lastchat_model = require('../models/lastChat.model');
const message_model = require('../models/message.model');

exports.userpartner = async (req, res) => {
    console.log('user-service: userpartner');
    var email = req.body.email;
    var currentEmail = req.body.currentEmail;
    let check = await user_model.checkIsLogin(email);
    if (check == true) {
        let results = await user_model.getUserPartner(currentEmail);
        let datetime = new Date(results[0].logoutTime);
        let dateTimeNow = new Date();
        let time = calculateTime(dateTimeNow, datetime);
        results[0].logoutTime = time;
       // console.log("UserPartner: ", results);
        res.status(200).send(results);
    } else {
        res.status(400).send("System: Tai khoan chua dang nhap");
    }
}

function calculateTime(time1, time2) {
    var time = time1 - time2;

    if (time > 3600000) {
        return ("Active " + Math.round(time / 3600000) + " h ago")
    }
    else if ((time < 3600000) && (time > 60000)) {
        return ("Active " + Math.round(time / 60000) + " m ago")
    }
    else return ("Active now");
}

exports.user = async (req, res) => {
    console.log('user-service: user');
    let email = req.body.email;
    let check = await user_model.checkIsLogin(email);
    if (check == true) {
        let results = await user_model.getUserByEmail(email);
        res.status(200).send(results);
    } else {
        res.status(400).send("System: Tai khoan chua dang nhap");
    }
}

exports.listUser = async (req, res) => {
    console.log('user-service: listUser');
    let email = req.body.email;
    let listUser = [{
        email: '',
        fullName: '',
        avatar: '',
        lastMess: ''
    }];
    let results = await lastchat_model.listUser(email);
    for (var i = 0; i < results.length; i++) {
        let lastMessageID = results[i].messageID;
        if (results[i].fromEmail == email) {
            let userInfo = await user_model.userInfoInListChat(results[i].toEmail, lastMessageID);
            listUser[i] = userInfo;
        } else {
            let userInfo = await user_model.userInfoInListChat(results[i].fromEmail, lastMessageID);
            listUser[i] = userInfo;
        }
    }
    res.status(200).send(listUser);
}

exports.search = async (req, res) => {
    console.log('user-service: search');
    let email = req.body.email;
    let email_search = req.body.email_search;
    let searchUser = {
        email: '',
        fullName: '',
        avatar: '',
        lastMess: ''
    };
    let lastMessageID;
    let checkLogin = await user_model.checkIsLogin(email);
    if (checkLogin == true) {
        let checkLastChatIsExist = await lastchat_model.checkLastChatIsExist(email, email_search);
        if (checkLastChatIsExist == true) {
            let temp = await lastchat_model.getLastChat(email, email_search);
            lastMessageID = temp[0].messageID;
            searchUser = await user_model.userInfoInListChat(email_search, lastMessageID);
            res.status(200).send(searchUser);
        }else{
            let temp = await lastchat_model.getLastChat(email, email_search);
            searchUser = await user_model.userInfoInListChat(email_search, lastMessageID);
            res.status(200).send(searchUser);
        }
    } else {
        res.status(401).send("System: Tai khoan chua dang nhap")
    }
}

exports.updateProfile = async (req, res) => {
    console.log('user-service: updateProfile');
    let account = {
        email: req.body.email,
        fullName: req.body.fullName,
        synopsis: req.body.synopsis,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username
    }
    let check = await user_model.checkIsLogin(account.email);
    if (check == true) {
        await user_model.updateProfile(account)
        res.status(200).send("System: Update thanh cong");
    } else {
        res.status(401).send("System: Please login to update profile");
    }
}