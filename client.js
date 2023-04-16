const clickButton = document.getElementById('click-button');
const clickCountDisplay = document.getElementById('click-count');

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
