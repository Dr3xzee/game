let player1Choice = null;
let player2Choice = null;

function makeChoice(choice, player) {
    if (player === 1) {
        player1Choice = choice;
        document.getElementById('player1-choice').innerText = `Choice: ${choice.charAt(0).toUpperCase() + choice.slice(1)}`;
    } else {
        player2Choice = choice;
        document.getElementById('player2-choice').innerText = `Choice: ${choice.charAt(0).toUpperCase() + choice.slice(1)}`;
    }

    if (player1Choice && player2Choice) {
        document.getElementById('result-button').disabled = false;
    }
}

function determineWinner() {
    const result = document.getElementById('result');
    if (player1Choice === player2Choice) {
        result.innerText = "It's a tie!";
    } else if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'paper' && player2Choice === 'rock') ||
        (player1Choice === 'scissor' && player2Choice === 'paper')
    ) {
        result.innerText = "Player 1 wins!";
    } else {
        result.innerText = "Player 2 wins!";
    }

    // Reset choices for next round
    resetGame();
}

function resetGame() {
    player1Choice = null;
    player2Choice = null;
    document.getElementById('player1-choice').innerText = 'Choice: None';
    document.getElementById('player2-choice').innerText = 'Choice: None';
    document.getElementById('result-button').disabled = true;
}
