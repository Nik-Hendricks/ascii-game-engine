const express = require('express');
const fs = require('fs')
var app = express();

app.listen(81)

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


function getFilesizeInBytes(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes
  }
