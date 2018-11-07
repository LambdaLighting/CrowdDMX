# Crowd DMX
Use the crowd as a lighting source. Send RGB color values via websockets to
many mobile phones/ etc., to use them as light sources.

## Action Socket
To send actions to the clients, this server provides a socket. ola_trigger will
call a script which sends data to this socket.

## TODO
- Test performance with many clients
  - send update to clients only once (currently 3x by rgb update)
  - Maybe port socket server to rust
- Create and test networking setup
- Add multiple channels
