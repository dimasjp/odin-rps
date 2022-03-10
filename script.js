
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
            return ('You Win! ' + playerSelection + ' beats ' + computerSelection)
    }

    else if ((playerSelection == 'Rock' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return ('You Lose! ' + computerSelection + ' beats ' + playerSelection)
}

    else if (playerSelection == computerSelection); {
        return ('Draw!')
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));