// const express = require('express');
// const app = express();
const login_service = require('../services/login.service');
const user_service = require('../services/user.service');
const message_model = require('../models/message.model');
const message_service = require('../services/message.service');


exports.registerEndpoint = (app) => {
    app.post('/login',login_service.login); //OK
        
    app.post('/signup', login_service.signup);//OK
    
    app.post('/logout', login_service.logout); //Chưa check vì động đến Socket

    app.post('/checklogin', login_service.checkLogin); //OK

    app.post('/listuser', user_service.listUser); //OK

    app.post('/userpartner',user_service.userpartner);  //OK
    
    app.post('/user', user_service.user); //OK
    
    app.post('/search', user_service.search); //OK
    
    app.post('/historymessage', message_service.historyMessage); //OK

    app.post('/updateprofile', user_service.updateProfile); //OK

    app.post('/sendmessage', message_service.sendMessage); //OK

    app.post('/newchat', user_service.newChat);
}

