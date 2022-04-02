let playerScore = 0;
let computerScore = 0;


//Computer play random RPS
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Play one round of RPS
function playRound(playerSelect, computerSelect) {
    let roundResult = "";

    if ((playerSelect == 'Rock' && computerSelect == 'Scissors') ||
        (playerSelect == 'Paper' && computerSelect == 'Rock') ||
        (playerSelect == 'Scissors' && computerSelect == 'Paper')) {
            roundResult = 'playerWin';
            playerScore += 1;
    }

    else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
        (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
        (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
            roundResult = 'computerWin';
            computerScore += 1;
    }

    else {
        roundResult = 'draw';
    }
    resultText(roundResult, playerSelect, computerSelect);
}

//Button
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', () => playerChoose('Rock'));
btnPaper.addEventListener('click', () => playerChoose('Paper'));
btnScissors.addEventListener('click', () => playerChoose('Scissors'));

function playerChoose(playerSelect) {
    const computerSelect = computerPlay();
    playRound(playerSelect, computerSelect);
}

//Text Content
const result = document.querySelector('#result');

function resultText(roundResult, playerSelect, computerSelect) {
    if (roundResult === 'playerWin') {
        result.textContent = ('You Win! ' + playerSelect + ' beats ' + computerSelect);
    }

    else if (roundResult === 'computerWin') {
        result.textContent = ('You Lose! ' + computerSelect + ' beats ' + playerSelect);
    }

    else {
        result.textContent = ('Draw!');
    }
}



// //play 5 round of rps
// function game() {
//     for (let i = 0; i < 5; i++) {
//         const computerSelect = computerPlay();
//         const playerSelect = prompt("Choose Rock, Paper, or Scissors!");
//         playRound(playerSelect, computerSelect);
//         console.log(playerScore);
//         console.log(computerScore);
//     }

//     if (playerScore > computerScore) {
//         console.log('Player Win!');
//         console.log("Refresh!");
//     }

//     else if (playerScore < computerScore) {
//         console.log('Computer Win!');
//         console.log("Refresh!");
//     }
    
//     else {
//         console.log('Draw!');
//         console.log("Refresh!");
//     }
// }