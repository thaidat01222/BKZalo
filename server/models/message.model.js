const db = require('./database');


exports.getMessageById = async (messageID) => {
    // console.log('getMessageById');
    let sql = `SELECT * FROM message WHERE messageID = '${messageID}'`;
    try {
        const [results, field] = await db.query(sql);
        // console.log('content',results[0].content);
        return results;
    } catch (err) {
        console.log(err);
    }
};

exports.saveMessageToDataBase = async (message, status) => {
    console.log('SaveMessageToDB');
    let sql = `INSERT INTO message(fromEmail, toEmail, content, image, contentType, sentTime, status) VALUES ('${message.fromEmail}','${message.toEmail}','${message.content}','${message.image}','${message.contentType}', NOW(), '${status}')`;
    console.log('saveMessageToDataBase: ', sql);
    try {
        const [results, field] = await db.query(sql);
        let messageId = results.insertId;
        return messageId;
        console.log("System: Da insert message va messageID=" + messageId);
    } catch (err) {
        console.log(err);
    }
}

exports.historyMessage = async (emailA, emailB) => {
    console.log('historyMessage');
    let sql = `SELECT * FROM message WHERE (fromEmail = '${emailA}' AND toEmail = '${emailB}') OR (fromEmail = '${emailB}' AND toEmail = '${emailA}')`;
    console.log('historyMessage ', sql);
    try {
        const [results, field] = await db.query(sql);
        // console.log(results);
        return results;
    } catch (err) {
        console.log(err);
    }
}

exports.historyImage = async (emailA, emailB) => {
    console.log('historyImage');
    let sql = `SELECT (messageID),(image) FROM message WHERE (((fromEmail = '${emailA}' AND toEmail = '${emailB}') OR (fromEmail = '${emailB}' AND toEmail = '${emailA}')) AND contentType = 'image') ORDER BY sentTime DESC`;
    console.log('historyImage ', sql);
    try{
        const [results, field] = await db.query(sql);
        return results;
    }catch(err){
        console.log(err);
    }
}

exports.getImageById = async (messageID) =>{
    let sql = `SELECT image FROM message WHERE messageID = '${messageID}'`;
    try {
        const [results, field] = await db.query(sql);
        // console.log('content',results[0].content);
        return results[0].image;
    } catch (err) {
        console.log(err);
    }
}