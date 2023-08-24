let score = 0;

function updateScore() {
    document.getElementById("score").textContent = score;
}

updateScore(); // Chama a função inicialmente para exibir o valor inicial

const interval = setInterval(() => {
    score++;
    updateScore();
}, 100);

// Condição para interromper o intervalo quando score for igual a -1
if (score === -1) {
    clearInterval(interval);
}
