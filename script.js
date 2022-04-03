//DOM Select
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const result = document.querySelector('#result');
const title = document.querySelector('#title');
const resultFinal = document.querySelector('#resultFinal');
const scores = document.querySelector('#scores');


let playerScore = 0;
let computerScore = 0;

//Computer play random RPS
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

//Play one round of RPS
function playRound(playerSelect, computerSelect) {
    let roundResult = "";
    title.remove();

    if ((playerSelect === 'Rock' && computerSelect === 'Scissors') ||
        (playerSelect === 'Paper' && computerSelect === 'Rock') ||
        (playerSelect === 'Scissors' && computerSelect === 'Paper')) {
            roundResult = 'playerWin';
            playerScore += 1;
            if (playerScore === 5) {
                gameOver(playerScore, computerScore);
                btnRock.removeEventListener('click', () => playerChoose('Rock'));
                btnPaper.removeEventListener('click', () => playerChoose('Paper'));
                btnScissors.removeEventListener('click', () => playerChoose('Scissors'));
            }
    }

    else if ((playerSelect === 'Rock' && computerSelect === 'Paper') ||
        (playerSelect === 'Paper' && computerSelect === 'Scissors') ||
        (playerSelect === 'Scissors' && computerSelect === 'Rock')) {
            roundResult = 'computerWin';
            computerScore += 1;
            if (computerScore === 5) {
                gameOver(playerScore, computerScore);
                btnRock.removeEventListener('click', () => playerChoose('Rock'));
                btnPaper.removeEventListener('click', () => playerChoose('Paper'));
                btnScissors.removeEventListener('click', () => playerChoose('Scissors'));
            }
    }

    else {
        roundResult = 'draw';
    }
    resultText(roundResult, playerSelect, computerSelect);
    scoreDisplay(playerScore, computerScore);
};

//Button Event
btnRock.addEventListener('click', () => playerChoose('Rock'));
btnPaper.addEventListener('click', () => playerChoose('Paper'));
btnScissors.addEventListener('click', () => playerChoose('Scissors'));

function playerChoose(playerSelect) {
    const computerSelect = computerPlay();
    playRound(playerSelect, computerSelect);
}

//Text Content
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
};

function scoreDisplay(playerScore, computerScore) {
    scores.textContent = (playerScore + ' vs ' + computerScore);
}

function gameOver(playerScore, computerScore) {
    result.remove();
    if (playerScore === 5) {
        resultFinal.textContent = ('🎉You Win!');
    }

    else if (computerScore === 5) {
        resultFinal.textContent = ('🤖You Lose!');
    }
};

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