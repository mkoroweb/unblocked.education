// Filter games based on search input text
function filterGames() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('game-card');

    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getAttribute('data-name');
        if (name.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Filter games by category buttons
function filterCategory(category) {
    let cards = document.getElementsByClassName('game-card');
    let buttons = document.getElementsByClassName('cat-btn');

    // Update active button styling
    for (let btn of buttons) {
        btn.classList.remove('active');
    }
    event.target.classList.add('active');

    for (let i = 0; i < cards.length; i++) {
        let cardCat = cards[i].getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Open the game inside the modal player frame
function openGame(title, url) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('gameFrame').src = url;
    document.getElementById('gameModal').style.display = "block";
}

// Close the game modal and stop audio/running process
function closeGame() {
    document.getElementById('gameModal').style.display = "none";
    document.getElementById('gameFrame').src = ""; // Clears frame so game stops
}
