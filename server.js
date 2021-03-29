const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');
var connectedUsers;

http.listen(80, () => {
  console.log("listening on 80")
})

//app.listen(81)

app.get("/js/:file",function(req, res){
    var file = req.param('file');
    res.header({
      'Content-Type': 'text/javascript',
      'Content-Size': getFilesizeInBytes(__dirname + '/public/infector/js/' + file)
    });
    res.sendFile(__dirname + '/public/infector/js/' + file)
  })

app.get("/img/:file",function(req, res){
    var file = req.param('file')
    res.header({
      'Content-Type': 'image/png',
      'Content-Length': getFilesizeInBytes(__dirname + '/public/infector/img/' + file)
    });
    res.sendFile(__dirname + '/public/infector/img/'+file)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/infector/game.html')
})

app.get('/2', (req, res) => {
    res.sendFile(__dirname + '/public/infector/game2.html')
})

app.get('/creator', (req, res) => {
  res.sendFile(__dirname + '/public/infector/creator.html');
})

connectedUsers = []
io.on('connection', (socket) =>  {
  console.log('connection')
  socket.on('register', ((username, callback) => {
    //connectedUsers[username] = {socket, data:{"username":username}};
    connectedUsers.push(username)
    var cb = {username: username, "connectedUsers": connectedUsers}
    //connectedUsers.push[socket]
    //console.log(connectedUsers)
    socket.broadcast.emit('newPlayer', username, [5, 5])
    callback(cb)
  }))

  socket.on('pos', (username, pos)  => {
    //console.log(username)
    //console.log(pos)
    socket.broadcast.emit('update', username, pos)
  })
});


function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes
  }
