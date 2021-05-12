const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');

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

app.get('/3', (req, res) => {
  res.sendFile(__dirname + '/public/infector/game3.html')
})

app.get('/4', (req, res) => {
  res.sendFile(__dirname + '/public/infector/game4.html')
})

app.get('/creator', (req, res) => {
  res.sendFile(__dirname + '/public/infector/creator.html');
})





function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes
  }
