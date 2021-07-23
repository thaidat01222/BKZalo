const db = require('./database');

exports.listUser = async (email)=>{
    let sql = `SELECT * FROM lastchat WHERE fromEmail = '${email}' OR toEmail = '${email}' ORDER BY sentTime DESC`;
    console.log('listUser: ',sql);
    try{
        const [results, field] = await db.query(sql);
        return results;
    }catch(err){
        console.log(err);
    }
}

exports.checkLastChatIsExist = async (emailA, emailB)=>{
    var check = false;
    let sql = `SELECT (fromEmail), (toEmail) FROM lastchat WHERE (fromEmail = '${emailA}' AND toEmail = '${emailB}') OR (fromEmail = '${emailB}' AND toEmail = '${emailA}')`;
    console.log('checkLastChatExist: ',sql);
    try{
        const [results, field] = await db.query(sql);
        if(results.length != 0 ) {
            check = true;
        }else{
            check = false;
        }
    }catch(err){
        console.log(err);
    }
    console.log('checkLastChatExist: ',check);
    return check;
}

exports.getLastChat = async (emailA, emailB)=>{
    let sql = `SELECT (fromEmail), (toEmail), (messageID) FROM lastchat WHERE (fromEmail = '${emailA}' AND toEmail = '${emailB}') OR (fromEmail = '${emailB}' AND toEmail = '${emailA}')`;
    console.log('getLastChat: ',sql);
    try{
        const [results, field] = await db.query(sql);
        return results
    }catch(err){
        console.log(err);
    }
}

exports.updateLastChat = async (message, messageId)=>{
    let sql = `UPDATE lastchat SET fromEmail='${message.fromEmail}', toEmail='${message.toEmail}', messageID='${messageId}',sentTime=NOW() WHERE (fromEmail='${message.fromEmail}' AND toEmail='${message.toEmail}') OR (fromEmail='${message.toEmail}' AND toEmail='${message.fromEmail}') `;
    console.log('updateLastChat: ',sql);
    try{
        const [results, field] = await db.query(sql);
    }catch(err){
        console.log(err);
    }
}

exports.insertLastChat = async (message, messageID)=>{
    sql = `INSERT INTO lastchat(fromEmail, toEmail, messageID, sentTime) VALUES('${message.fromEmail}','${message.toEmail}','${messageID}',NOW())`;
        try {
            const [results, field] = await db.query(sql);
            console.log("System: Da Insert lastchat ");
        } catch {
            console.log(err);
        }
}