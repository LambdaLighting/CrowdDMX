var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var dgram = require('dgram');



// Save current color settings
var color = {
  red: 0,
  green: 0,
  blue: 0,
}



// Form given int to hex string, always 2 digits long
function toHEX(c) {
  if (c < 0) return "00";
  else if (c < 16) return "0" + c.toString(16);
  else if (c < 256) return c.toString(16);
  else "FF";
}

// Format given rgb object to web style color string
function getHEXColor(c) {
  return "#" + toHEX(c.red) + toHEX(c.green) + toHEX(c.blue);
}



// Action Socket
var server = dgram.createSocket('udp4');
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Action Socket Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
  var d = message.toString('utf8').split(":")
  color[d[0]] = parseInt(d[1]);
  // Send new color to all clients
  io.emit("color_update", getHEXColor(color));
});
server.bind(4400, "127.0.0.1");



// Add route for main index html file
app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});
// send current color to new connected clients
io.on('connection', function(socket){
  socket.emit("color_update", getHEXColor(color));
});
// Start main http server
http.listen(3000, function(){
  console.log('listening on *:3000');
});
