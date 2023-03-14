let score = 0;
let oppScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return ['rock','paper','scissors'][index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`TIE! ${playerSelection.toUpperCase()} ties with ${computerSelection.toUpperCase()}`);
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        ++score;
        console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
    }
    else {
        ++oppScore;
        console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
    }
    console.log(`The score is now ${score}-${oppScore}`);
    if (score == 5) {
        console.log('YOU WON THE ROUND');
        [score, oppScore] = [0,0];
    }
    else if (oppScore == 5) {
        console.log('YOU LOST THE ROUND')
        [score, oppScore] = [0,0];
    }
}

rock.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
})
paper.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
})
scissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
})
