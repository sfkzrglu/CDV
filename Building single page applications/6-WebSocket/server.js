const WebSocket = require('ws');
const express = require('express');
const http = require('http');

let results = {
    pizza: 0,
    pasta: 0
};

const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server: server, path: "/voting" });
const clients = new Set();
app.use(express.static('client'));
server.listen(3000);

wsServer.on('connection', (socket) => {
    console.log('Client connected!');
    socket.on('message', (message) => {
        // handle vote
        console.log('Message received: ' + message);
        results[message]++
        console.log("result: ", results);
        wsServer.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                // send current results to all clients
                console.log('Sending to a client from clients.');
                socket.send(JSON.stringify(results))
            }
        });
    });
    socket.on('error', (error) => {
        console.log('Error:' + error);
    });
    // send current results to a newly connected client
    console.log('Sending to a newly connected client.');
    clients.add(socket)
    socket.on('close', () => {
        clients.delete(socket);
        console.log('Client disconnected, total number of clients is: ',
            clients.size);
    });
});

