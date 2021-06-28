const db = require('./database');
const message_model = require('./message.model');
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
    let sql = `SELECT (avatar),(email),(fullName),(logoutTime) FROM users WHERE email = '${email}'`;
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
        listUser.lastMess = lastMess;
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
    var sql = `INSERT INTO users(username, password, email) VALUES ("${account.username}","${account.password}","${account.email}")`;
    console.log('signup: ', sql);
    try {
        const [results, field] = await db.query(sql);
    } catch (err) {
        console.log(err)
    }
}

exports.updateProfile = async (account) => {
    let sql = `UPDATE users SET fullName = '${account.fullName}', synopsis = '${account.synopsis}',age = '${account.age}', phoneNumber = '${account.phoneNumber}', username = '${account.username}' WHERE email = '${account.email}'`;
    try {
        const [results, field] = await db.query(sql);
    } catch (err) {
        console.log(err)
    }
}      