const path = require('path');
const clickButton = document.getElementById('click-button');
const clickCountDisplay = document.getElementById('click-count');

// Serve index.html on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

clickButton.addEventListener('click', () => {
    fetch('/increment')
        .then(response => response.json())
        .then(data => {
            clickCountDisplay.textContent = data.clicks;
        })
        .catch(err => {
            console.error('Error:', err);
        });
});

// Get the initial click count
fetch('/getClicks')
    .then(response => response.json())
    .then(data => {
        clickCountDisplay.textContent = data.clicks;
    })
    .catch(err => {
        console.error('Error:', err);
    });
