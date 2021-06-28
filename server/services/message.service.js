const bodyParser = require('body-parser');
const user_model = require('../models/users.model');
const lastchat_model = require('../models/lastChat.model');
const message_model = require('../models/message.model');
const socket_service = require('./socket.service');

exports.sendMessage = async (req, res) => {
    console.log('message-service: sendMessage');
    let message = {
        fromEmail: req.body.fromEmail,
        toEmail: req.body.toEmail,
        content: req.body.content,
        contentType: req.body.contentType
    }
    console.log(message);
    let status;
    let checkOnline = await socket_service.checkOnline(message.toEmail); 
    console.log('Check online: ',checkOnline );
    if (checkOnline) {
        status = 'received';
        let messageID = await message_model.saveMessageToDataBase(message, status);
        let check =  await lastchat_model.checkLastChatIsExist(message.fromEmail, message.toEmail);
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
        let messageID = await message_model.saveMessageToDataBase(message, status);
        let check =  await lastchat_model.checkLastChatIsExist(message.fromEmail, message.toEmail);
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
