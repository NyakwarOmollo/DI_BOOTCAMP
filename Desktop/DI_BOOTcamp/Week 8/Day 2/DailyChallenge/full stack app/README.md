# Full Stack App

This is a full stack application with separate client and server directories.

## Project Structure

```
full stack app/
├── client/              # React frontend
│   ├── App.js          # Main React component
│   └── package.json    # Client dependencies
├── server/             # Express backend
│   ├── server.js       # Express server
│   └── package.json    # Server dependencies
└── README.md           # This file
```

## Getting Started

### Server Setup
1. Navigate to the `server` folder
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Server will run on `http://localhost:5000`

### Client Setup
1. Navigate to the `client` folder
2. Install dependencies: `npm install`
3. Start the client: `npm start`
4. Client will run on `http://localhost:3000`

## Features

- **GET /api/hello** - Returns a greeting message
- **POST /api/world** - Accepts user input and returns a processed message
- React frontend communicates with Express backend via REST API
