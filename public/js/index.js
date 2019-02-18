var socket = io(); //method available cuz we loaded in the library, making a request to open a request
//event name, callback
socket.on('connect', function() {
  console.log('Connected to Server');

//sends an email event as soon as it connects
  // socket.emit('createEmail', {
  //   to: 'something@ex.com',
  //   text: "hello pt 2",
  //   createdAt: 123
  // });

  socket.emit('createMessage', {
    to: 'user1',
    text: 'hello user2'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

//name,
  //unction(arg), arg = what we pass in
socket.on('newMessage', function(message) {
  console.log(message);
})
