function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ['rock','paper','scissors'][index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let s = new Set(['rock', 'paper', 'scissors']);
    if (!s.has(playerSelection)) {
        return "not a valid choice";
    }
    if (playerSelection == computerSelection) {
        return `TIE! ${playerSelection.toUpperCase} ties with ${computerSelection.toUpperCase}`;
    }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
    else {
        return `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    }

}

function game() {
    let playerSelection = prompt("enter rock, paper, or scissors:", 'roCk');
    console.log(playRound(playerSelection, getComputerChoice()));
}

game();