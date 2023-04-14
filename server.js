const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// Serve index.html on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());

// In-memory storage for click count
let clickCount = 0;

// Routes
app.get('/getClicks', (req, res) => {
    res.json({ clicks: clickCount });
});

app.get('/increment', (req, res) => {
    clickCount++;
    res.json({ clicks: clickCount });
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css', { headers: { 'Content-Type': 'text/css' } });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
