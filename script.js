let score = 0;
let gameActive = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    if (gameActive) return;
    gameActive = true;
    score = 0;
    document.getElementById('score').textContent = score;
    moveBox();
}

function moveBox() {
    const box = document.getElementById('box');
    const gameArea = document.getElementById('gameArea');
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientHeight - box.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;
    box.style.display = 'block';

    box.addEventListener('click', boxClicked);
}

function boxClicked() {
    score++;
    document.getElementById('score').textContent = score;
    moveBox();
}

// Optionally, you can add a timer or a condition to stop the game
