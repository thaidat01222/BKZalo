const bodyParser = require('body-parser');
const user_model = require('../models/users.model');
const lastchat_model = require('../models/lastChat.model');
const message_model = require('../models/message.model');
const socket_service = require('./socket.service');
const fs = require('fs');
const path = require('path');
var crypto = require("crypto");


function decode_base64(base64String, filename) {
    let base64Image = base64String.split(';base64,').pop();
    let imageString = base64String.toString();
    let end = imageString.indexOf(';');
    let fileType = imageString.slice(11, end);
    console.log('fileType', fileType);
    let imageDir = `/image/chat/` + `${filename}.${fileType}`;
    console.log('avatarDir', imageDir);
    fs.writeFile(path.join(__dirname, `../public`, imageDir), base64Image, { encoding: 'base64' }, function (err) {
        console.log('File created');
    });
    return imageDir;
}

exports.sendMessage = async (req, res) => {
    console.log('message-service: sendMessage');
    let message = {
        fromEmail: req.body.fromEmail,
        toEmail: req.body.toEmail,
        content: req.body.content,
        image: req.body.image,
        contentType: req.body.contentType
    }
    let contentType = message.contentType;
    let status;
    let checkOnline = await socket_service.checkOnline(message.toEmail);
    console.log('Check online: ', checkOnline);
    if (checkOnline) {
        status = 'received';
        let messageID;
        if (contentType == 'image') {
            let r = crypto.randomBytes(10).toString('hex');
            console.log("random", r);
            let imageDir = decode_base64(message.image, r);
            message.image = imageDir;
            message.content = '';
            messageID = await message_model.saveMessageToDataBase(message, status);
        } else {
            message.image = '';
            messageID = await message_model.saveMessageToDataBase(message, status);
        }

        let check = await lastchat_model.checkLastChatIsExist(message.fromEmail, message.toEmail);
        console.log('Check Lastchat:', check);
        if (check == true) {
            console.log('LastChat Ton Tai Nen Phai Update');
            await lastchat_model.updateLastChat(message, messageID);
        } else {
            console.log('LastChat Khong Ton Tai Nen Phai Insert');
            await lastchat_model.insertLastChat(message, messageID);
        }
        socket_service.emitMessage(message);
    } else {
        status = 'sent';
        let messageID;
        if (contentType == 'image') {
            let r = crypto.randomBytes(20).toString('hex');
            console.log("random", r);
            let imageDir = decode_base64(message.image, r);
            message.image = imageDir;
            message.content = '';
            messageID = await message_model.saveMessageToDataBase(message, status);
        } else {
            message.image = null;
            messageID = await message_model.saveMessageToDataBase(message, status);
        }

        let check = await lastchat_model.checkLastChatIsExist(message.fromEmail, message.toEmail);
        console.log('Check Lastchat:', check);
        if (check == true) {
            console.log('LastChat Ton Tai Nen Phai Update');
            await lastchat_model.updateLastChat(message, messageID);
        } else {
            console.log('LastChat Khong Ton Tai Nen Phai Insert');
            await lastchat_model.insertLastChat(message, messageID);
        }
    }
    res.status(200).send("Gui tin nhan thanh coong");
}

exports.historyMessage = async (req, res) => {
    console.log('message-service: historyMessage');
    let fromEmail = req.body.fromEmail;
    let toEmail = req.body.toEmail;
    let results = await message_model.historyMessage(fromEmail, toEmail);
    res.send(results);
}

exports.imageShared = async (req, res)=>{
    console.log('message-service: historyMessage');
    let fromEmail = req.body.fromEmail;
    let toEmail = req.body.toEmail;
    let results = await message_model.historyImage(fromEmail,toEmail);
    res.send(results)    

}