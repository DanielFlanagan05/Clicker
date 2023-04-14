const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
