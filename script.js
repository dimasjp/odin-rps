let playerScore = 0;
let computerScore = 0;

//computer play random rps
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//play one round of rps
function playRound(playerSelect, computerSelect) {
    computerSelect = computerPlay();

    if ((playerSelect == 'Rock' && computerSelect == 'Scissors') ||
        (playerSelect == 'Paper' && computerSelect == 'Rock') ||
        (playerSelect == 'Scissors' && computerSelect == 'Paper')) {
            return ('You Win! ' + playerSelect + ' beats ' + computerSelect)
    }

    else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
        return ('You Lose! ' + computerSelect + ' beats ' + playerSelect)
    }

    else if (playerSelect == computerSelect); {
        return ('Draw!')
    }
}

//play 5 round of rps
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelect = computerPlay();
        playerSelect = prompt("Choose Rock, Paper, or Scissors!");
        playRound(playerSelect, computerSelect);
        console.log(playRound(playerSelect, computerSelect))
    }
}



/*
const playerSelect = "Scissors";
const computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
*/