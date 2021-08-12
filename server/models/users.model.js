const db = require('./database');
const message_model = require('./message.model');

exports.getAllEMail = async () =>{
    let sql = `SELECT (email), (fullName) FROM users WHERE 1 = 1`;
    console.log('getAllEMail ', sql);
    try{
        const [results, field] = await db.query(sql);
        return results;
    }catch(err){
        console.log(err);
    }
}

exports.getUserByEmail = async (email) => {
    let sql = `SELECT * FROM users WHERE email = '${email}'`;
    console.log('getUserByEmail: ', sql)
    try {
        const [results, field] = await db.query(sql);
        //console.log(results);
        return results;
    } catch (err) {
        console.log(err);
    }
};

exports.findAccByEmailAndPass = async (email, password) => {
    let sql = `SELECT (email),(password) FROM users WHERE email = '${email}' AND password = '${password}'`;
    console.log('findAccByEmailAndPass: ', sql);
    try {
        const [results, field] = await db.query(sql);
        //console.log("DB: results of findAccByEmailAndPass: ", results);
        return results;
    } catch (err) {
        console.log(err);
    }
}

exports.checkIsLogin = async (email) => {
    let sql = `SELECT isLogin FROM users WHERE email = '${email}'`;
    console.log('checkLogin: ', sql)
    let check;
    try {
        const [results, field] = await db.query(sql);
        if (results[0].isLogin == 1) {
            check = true;
        } else {
            check = false;
        }
    } catch (err) {
        console.log(err);
    }
    return check;
};

exports.getUserPartner = async (email) => {
    let sql = `SELECT (avatar),(email),(fullName),(logoutTime),(synopsis),(phoneNumber) FROM users WHERE email = '${email}'`;
    console.log('getUserPartner: ', sql)
    try {
        const [results, field] = await db.query(sql);
        if (results != null) {
            return results;
        } else {
            return results;
        }
    } catch (err) {
        console.log(err)
    }
}

exports.login = async (email, password) => {
    let sql = `SELECT * FROM users WHERE (email = '${email}' AND password = '${password}'`;
    console.log('Login: ', sql);
    try {
        const [results, field] = await db.query(sql);
        return results;
    } catch (err) {
        console.log(err)
    }
}

exports.updateIsLogin = async (email) => {
    var sql = `UPDATE users SET isLogin = 1, logoutTime = Now() - Now() WHERE email =  '${email}'`;
    console.log('UpdateIsLogin: ', sql);
    try {
        const [results, field] = await db.query(sql);
    } catch (err) {
        console.log(err);
    }
}

exports.userInfoInListChat = async (email, messageID) => {
    let listUser = {
        email: '',
        fullName: '',
        avatar: '',
        lastMess: ''
    }
    let sql = `SELECT (email),(fullName),(avatar) FROM users WHERE email = '${email}'`;
    try {
        const [results, field] = await db.query(sql);
        listUser.email = results[0].email;
        listUser.fullName = results[0].fullName;
        listUser.avatar = results[0].avatar;
    } catch (err) {
        console.log(err);
    }
    let lastMess = await message_model.getMessageById(messageID);
    if (lastMess != null) {
        try{
            if(lastMess[0].contentType == 'text'){
                if(listUser.email == lastMess[0].fromEmail){
                    listUser.lastMess = lastMess[0].content;
                }else{
                    listUser.lastMess = 'You: ' +lastMess[0].content;
                }    
            }else{
                if(listUser.email == lastMess[0].fromEmail){
                    let infoFromEmail = await this.getUserByEmail(lastMess[0].fromEmail);
                    let fullName_fromEmail = infoFromEmail[0].fullName;
                    listUser.lastMess = fullName_fromEmail+ ' sent a photo';
                }else{
                    listUser.lastMess = 'You sent a photo';
                }
            }
        }catch(err){
            console.log(err)
        }
    } else {
        listUser.lastMess = '';
    }
    return listUser;
}


exports.updateLogOutTime = async (email) => {
    let sql = `UPDATE users SET isLogin = 0, logoutTime = Now()  WHERE email =  '${email}'`;
    console.log("update logoutTime: ", sql)
    try {
        const [results, field] = await db.query(sql);
    } catch (err) {
        console.log(err)
    }
}

exports.signup = async (account) => {
    let sql = `INSERT INTO users(username, fullName, password, email, avatar, logoutTime) VALUES ("${account.username}","${account.fullName}","${account.password}","${account.email}", "/image/avatar/default.jpg", "NOW() - NOW()")`;
    
    console.log('signup: ', sql);
    try {
        const [results, field] = await db.query(sql);
    } catch (err) {
        console.log(err)
    }
}

exports.displayAccount = async () => {
    let sql = `SELECT * FROM users WHERE email != 'admin@gmail.com'`;
    let displayAccount;
    try{
        const [results, field]= await db.query(sql);
        displayAccount = results;
    }catch(err){
        console.log(err);
    }
    return displayAccount;
}



exports.updateProfile = async (account) => {
    let sql_withoutImage = `UPDATE users SET fullName = '${account.fullName}', synopsis = '${account.synopsis}',age = '${account.age}', phoneNumber = '${account.phoneNumber}' WHERE email = '${account.email}'`;
    let sql = `UPDATE users SET fullName = '${account.fullName}', synopsis = '${account.synopsis}',age = '${account.age}', phoneNumber = '${account.phoneNumber}', avatar = '${account.avatar}' WHERE email = '${account.email}'`;
    try {
        if(account.avatar != null){
        const [results, field] = await db.query(sql);
        }else{
        const [results, field] = await db.query(sql_withoutImage);
        }
    } catch (err) {
        console.log(err)
    }
}      