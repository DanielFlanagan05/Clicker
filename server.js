const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// In-memory storage for click count
let clickCount = 0;

// Serve index.html on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes
app.get('/getClicks', (req, res) => {
    res.json({ clicks: clickCount });
});

app.get('/increment', (req, res) => {
    clickCount++;
    res.json({ clicks: clickCount });
});

// Catch-all route
app.use('*', (req, res) => {
    res.status(404).send('Resource not found');
});
  
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
