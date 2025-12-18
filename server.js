import express from 'express';
import { createServer } from "http";
import { Server } from "socket.io";
import crypto from 'crypto';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let roomIds = new Set();

let roomConnections = new Map(); 

io.on('connection', onConnected);

function onConnected(socket) {
    console.log(socket.id);
    
    // Handle joining a specific room
    socket.on('join-room', (roomId) => {
        if (!roomIds.has(roomId)) {
            socket.emit('error', 'Room does not exist');
            return;
        }
        
        // Join the Socket.IO room
        socket.join(roomId);
        socket.roomId = roomId; // Store roomId on socket for later use
        
        // Track connections per room
        if (!roomConnections.has(roomId)) {
            roomConnections.set(roomId, new Set());
        }
        roomConnections.get(roomId).add(socket.id);
        
        console.log(`Socket ${socket.id} joined room ${roomId}`);
        
        // Emit to everyone in this room
        io.to(roomId).emit('clients-total', roomConnections.get(roomId).size);
    });
    
    socket.on('disconnect', () => {
        console.log(`Socket disconnected ${socket.id}`);
        
        if (socket.roomId) {
            const room = roomConnections.get(socket.roomId);
            if (room) {
                room.delete(socket.id);
                // Emit updated count to roo
                // Clean up empty room tracking
                if (room.size === 0) {
                    roomConnections.delete(socket.roomId);
                    roomIds.delete(socket.roomId);
                    console.log(`Room ${socket.roomId} demolished - no users left`);
                }else{
                    io.to(socket.roomId).emit('clients-total', room.size);

                }
            }
        }
    });
    
    socket.on('message', (data) => {
        console.log(data);
        if (socket.roomId) {
            // Broadcast to everyone in the room except sender
            socket.to(socket.roomId).emit('chat-msg', data);
        }
    });
    
    socket.on('feedback', (data) => {
        if (socket.roomId) {
            socket.to(socket.roomId).emit('feedback', data);
        }
    });
}

app.post("/room", (req, res) => {
    if (req.body.action == 'create') {
        let roomID = req.body.value;
        roomIds.add(roomID);
        res.redirect(`/${roomID}`);
    }
    if (req.body.action == 'join') {
        // Handle join logic
    }
});

function createID() {
    let id = '';
    while (id.length < 6) {
        id += crypto.randomBytes(6)
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '');
    }
    return id.slice(0, 6);
}

app.get("/:roomID", (req, res) => {
    const roomId = req.params.roomID;
    if (!roomIds.has(roomId)) {
        return res.status(404).send("The Room You're trying to join doesn't exist!");
    } else {
        console.log("has value !!");
        res.sendFile(process.cwd() + '/public/chatroom.html');
    }
});

app.post('/create-room', (req, res) => {
    let roomId;
    do {
        roomId = createID();
    } while (roomIds.has(roomId));
    roomIds.add(roomId);
    res.json({ roomId });
});

httpServer.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});