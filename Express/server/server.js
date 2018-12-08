const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicPath = path.join(__dirname , '../public')

const Port = process.env.PORT || 3000

const app = express();

const server = http.createServer(app);

var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('New user Connected');
    
    socket.on('disconnect',()=>{
        console.log('User got disconnected.....');
        
    })
})

app.use(express.static(publicPath));

server.listen(Port,()=>{
    console.log(`Process is up and running on ${Port}`);
    
})