[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://real-time-cat-app-2-0.onrender.com)
> Note: the site is hosted on a free tier it might take upto 10-15 seconds to load (build & load).

# 🐱 Real-Time Cat App 2.0

A modern, real-time chat application with a playful cat theme, built with Node.js, Express, and Socket.IO. Create private chat rooms, connect with friends, and enjoy a smooth messaging experience.

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-4.x-blue.svg)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-orange.svg)
![License](https://img.shields.io/badge/License-ISC-yellow.svg)

##  Features

###  Core Functionality
- **Real-time Messaging**: Instant message delivery with WebSocket technology
- **Private Chat Rooms**: Create and join unique 6-character room IDs
- **Anonymous Chat**: Users can chat as "anonymous" or set custom names
- **Live User Count**: See how many users are currently in each room
- **Typing Indicators**: Know when someone is typing a message

###  User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Cat-themed Interface**: Playful design with cat imagery and purple gradient theme
- **Smooth Animations**: Elegant background animations and smooth scrolling
- **Auto-scroll**: Messages automatically scroll to the latest content
- **Message Timestamps**: See when messages were sent with relative time display

###  Technical Features
- **Room Management**: Automatic room cleanup when all users leave
- **Error Handling**: Graceful handling of invalid room IDs and connection issues
- **Cross-browser Support**: Works across all modern browsers
- **No Database Required**: Lightweight implementation using in-memory storage

##  Quick Start

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prasad1-S/Real-Time-Cat-App-2.0.git
   cd Real-Time-Cat-App-2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

##  Usage Guide

### Creating a Chat Room
1. Visit the main page at `http://localhost:3000`
2. Click "Create Room"
3. A unique 6-character room ID will be generated automatically
4. Click "Enter Room" to join your new chat room

### Joining a Chat Room
1. Visit the main page at `http://localhost:3000`
2. Click "Join Room"
3. Enter an existing room ID (6 characters)
4. Click "Join" to enter the room

### Chat Features
- **Send Messages**: Type in the message box and press Enter or click Send
- **Change Name**: Click on your name to edit it (max 20 characters)
- **See Active Users**: The bottom shows how many users are currently connected
- **Typing Indicators**: See when other users are typing

##  Project Structure

```
Real-Time-Cat-App-2.0/
├── server.js              # Main server file with Socket.IO setup
├── package.json           # Project dependencies and scripts
├── public/                # Static assets
│   ├── index.html         # Main landing page (room selector)
│   ├── chatroom.html      # Chat interface
│   ├── css/
│   │   ├── entry.css      # Landing page styles
│   │   └── styles.css     # Chat room styles
│   ├── js/
│   │   ├── entry.js       # Landing page JavaScript
│   │   └── index.js       # Chat room client logic
│   └── image/             # Cat-themed images
└── README.md              # This file
```

##  Technical Architecture

### Backend (Node.js/Express)
- **Express.js**: Web server framework
- **Socket.IO**: Real-time bidirectional communication
- **Room Management**: In-memory tracking of rooms and connections
- **Auto-cleanup**: Rooms are automatically removed when empty

### Frontend (HTML/CSS/JavaScript)
- **Vanilla JavaScript**: No frameworks for lightweight performance
- **jQuery**: DOM manipulation and event handling
- **Moment.js**: Time formatting and relative time display
- **Responsive CSS**: Mobile-first design approach

### Key Technologies
- **WebSocket Protocol**: Real-time communication
- **Event-driven Architecture**: Socket.IO events for all interactions
- **CSS Grid/Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth visual effects

## 🔧 Configuration

### Environment Variables
The application uses the following environment variables:

- `PORT`: Server port (default: 3000)

### Customization Options
- **Room ID Length**: Currently set to 6 characters (configurable in `server.js`)
- **Max Username Length**: 20 characters (configurable in `index.html`)
- **Theme Colors**: Purple gradient theme (configurable in `styles.css`)

##  Deployment

### Local Development
```bash
npm start
```

### Production Deployment
1. Set environment variables as needed
2. Build/compile if necessary (not required for this project)
3. Start the server with production settings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Clone your fork
git clone https://github.com/your-username/Real-Time-Cat-App-2.0.git
cd Real-Time-Cat-App-2.0

# Install dependencies
npm install

# Start development server
npm start
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **Socket.IO Team**: For the excellent real-time communication library
- **Express.js Team**: For the robust web framework
- **jQuery Team**: For simplifying DOM manipulation
- **Moment.js Team**: For powerful date/time handling

##  Contact

For questions, suggestions, or feedback:
- Create an issue on [GitHub](https://github.com/Prasad1-S/Real-Time-Cat-App-2.0/issues)
- Email: [subhojeetprasad123@gmail.com]

---

**Made with ❤️ and a lot of cat puns!** 🐱
