# Crowd DMX
Use the crowd as a lighting source. Send RGB color values via websockets to
many mobile phones/ etc., to use them as light sources.

## Action Socket
To send actions to the clients, this server provides a socket. ola_trigger will
call a script which sends data to this socket.
