// server/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Part I: GET Route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello From Express" });
});

// Part II: POST Route
app.post('/api/world', (req, res) => {
  const { input } = req.body;
  
  console.log("Received from client:", input); // Visible in terminal

  res.json({ 
    message: `I received your POST request. This is what you sent me: ${input}` 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});