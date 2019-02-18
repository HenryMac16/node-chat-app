const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; //for heroku
var app = express();

var server = http.createServer(app);
var io = socketIO(server); //can accept websocket connections

app.use(express.static(publicPath));

//register an event listener
//socket argument represents the individual socket
io.on('connection', (socket) => {
  console.log('New User Connected');

  //create an event, specify data -> dy default we dont have to emit any
  //emit to single connection
// socket.emit('newMessage', {
//     from: "random user",
//     text: "Hello!",
//     createdAt: 123
//   });


socket.on('createMessage', (message) => {
  console.log('createMessage', message);
  io.emit('newMessage', {
    from: message.from,
    text: message.text,
    createdAt: new Date().getTime()
  });
});



  socket.on('disconnect', (socket) => {
    console.log('User disconnected');
  })
});


//app
server.listen(port, () => { //this calls create server, passes app in as arguement
  console.log(`Server is up on port ${port}`);
});
