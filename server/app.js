const app = require('express')();
const http = require('http');
const io = require('socket.io')(http);
const mysql = require('mysql');
const port = process.env.PORT || 8000;

const server = http.createServer(app);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
const socketIo = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
  }); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'bkzalo'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.post('/signin', function (req, res) {
  console.log("da nhan req");
  var user_name = req.body.user;
  var password = req.body.password;
  console.log(user_name + " " + password);
  var sql = "SELECT * FROM `users`"
  db.query(sql, (err, results) => {
      if (err) {
          throw err;
      }
      var count = 0;
      console.log("length: " + results.length);
      for (i = 0; i < results.length; i++) {
          if ((user_name != results[i].username) || (password != results[i].password)) {
              console.log("sai roi");
              count++;
              console.log(count);
          }
      }
      if (count == results.length) {
          console.log("System: Sai thong tin");
          res.status(401).send("Sai thong tin");
      }
      for (i = 0; i < results.length; i++) {
          if ((user_name == results[i].username) && (password == results[i].password)) {
              console.log(results[i])
              var loggedInStatus = "true";
              res.status(200).json(results[i]);
          }
      }
  })
})


app.post('/signup', function (req, res) {
  console.log('da nhan sign up');
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  console.log(username + " " + email + " " + password);

  var sql_check = "Select username from `user`";
  var sql_insert = `INSERT INTO user(username,pasword, email) VALUES ("${username}","${password}","${email}")`;
  db.query(sql_check, (err, results) => {
      if (err) { throw err; }
      var check = true;
      for (i = 0; i < results.length; i++) {
          if ((username == results[i].username)) {
              console.log(results[i])
              check = false;
              res.status(401).send("System: Tai khoan da ton tai");
          }
      }
      if (check) {
          db.query(sql_insert, (err) => {
              if (err) { throw err; }
              res.status(200).send("System: Dang ky thanh cong");
              console.log("System: Da insert vào database")
          })
      }
  })
})
socketIo.on("connection", (socket) => { ///Handle khi có connect từ client tới
    console.log("New client connected" + socket.id); 
  
    socket.on("sendDataClient", function(data) { // Handle khi có sự kiện tên là sendDataClient từ phía client
      socketIo.emit("sendDataServer", { data });// phát sự kiện  có tên sendDataServer cùng với dữ liệu tin nhắn từ phía server
    })
  
    socket.on("disconnect", () => {
      console.log("Client disconnected"); // Khi client disconnect thì log ra terminal.
    });
  });
  
app.listen(port, function () {
  console.log('listening on :' + port);
});
