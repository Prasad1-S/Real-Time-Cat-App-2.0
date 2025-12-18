# Realtime Chat App (Node.js + Socket.io)

A simple realtime chat application built using **Node.js**, **Express**, and **Socket.io**.  
Users can send messages and see updates instantly without page reloads. Built while exploring the capabilities of Socket.io .

# Key Features
- Chat rooms are created using cryptographically secure IDs (Node.js crypto module)
- Multiple users can join the same room and chat in real time
- Multiple rooms can exist simultaneously without interference
- Rooms are automatically destroyed once all users leave (ensuring clean resource management)
- 
---

## 🚀 Installation

### 1. Initialize a Node project
```bash
npm init -y
```

###2. Install required packages
```bash
npm i express socket.io
```

3. Run the server
```bash
node server.js
```

Open in browser:
```bash
http://localhost:3000
```

