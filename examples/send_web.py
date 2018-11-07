#!/usr/bin/env python
# Send UDP Package to CrowdDMX Action Socket, which will send its data to all
# connected clients

import socket, time, sys

# Open a UDP socket...
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.connect(('127.0.0.1', 4400))

value = int(sys.argv[2])
data = '{}:{}'.format(sys.argv[1], value)
sock.send(data.encode())
