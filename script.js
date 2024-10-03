function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    // Determine the result
    if (playerChoice === computerChoice) {
        result = "It's a tie! Both chose " + playerChoice;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win! " + playerChoice + " beats " + computerChoice;
    } else {
        result = "You lose! " + computerChoice + " beats " + playerChoice;
    }

    // Display the choices and the result
    document.getElementById('result').innerText = result;
    document.getElementById('computer-choice').innerText = "Computer chose: " + computerChoice;

    // Optional: Add some animation for the computer choice
    animateChoice(computerChoice);
}

function animateChoice(choice) {
    const choiceElement = document.getElementById('computer-choice');
    choiceElement.classList.add('animate');

    // Remove the animation class after the animation ends
    setTimeout(() => {
        choiceElement.classList.remove('animate');
    }, 1000); // Adjust time as needed
}
