//DOM Select
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const compRock = document.querySelector('.compRock');
const compPaper = document.querySelector('.compPaper');
const compScissors = document.querySelector('.compScissors');
const result = document.querySelector('#result');
const title = document.querySelector('#title');
const resultFinal = document.querySelector('#resultFinal');
const scores = document.querySelector('#scores');
const buttons = document.querySelectorAll('button');


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
            }
    }

    else if ((playerSelect === 'Rock' && computerSelect === 'Paper') ||
        (playerSelect === 'Paper' && computerSelect === 'Scissors') ||
        (playerSelect === 'Scissors' && computerSelect === 'Rock')) {
            roundResult = 'computerWin';
            computerScore += 1;
            if (computerScore === 5) {
                gameOver(playerScore, computerScore);
            }
    }

    else {
        roundResult = 'draw';
    }
    playerPick(playerSelect);
    computerPick(computerSelect);
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
    scores.textContent = ('🧑 ' + playerScore + ' vs ' + computerScore + ' 🤖');
}

function gameOver(playerScore, computerScore) {
    result.remove();
    if (playerScore === 5) {
        resultFinal.textContent = ('🎉You Win!');
        playerButtons.style = 'pointer-events: none';
    }

    else if (computerScore === 5) {
        resultFinal.textContent = ('🤖You Lose!');
        playerButtons.style = 'pointer-events: none';
    }
};

//Animation
function computerPick(computerSelect) {
    if (computerSelect === 'Rock') {
        removePlay();
        compRock.classList.add('compPlay');
    }
    if (computerSelect === 'Paper') {
        removePlay();
        compPaper.classList.add('compPlay');
    }
    if (computerSelect === 'Scissors') {
        removePlay();
        compScissors.classList.add('compPlay');
    }
};

function playerPick(playerSelect) {
    if (playerSelect === 'Rock') {
        removePlayerPlay();
        btnRock.classList.add('playerPlay');
    }
    if (playerSelect === 'Paper') {
        removePlayerPlay();
        btnPaper.classList.add('playerPlay');
    }
    if (playerSelect === 'Scissors') {
        removePlayerPlay();
        btnScissors.classList.add('playerPlay');
    }
};

function removePlay() {
    compRock.classList.remove('compPlay');
    compPaper.classList.remove('compPlay');
    compScissors.classList.remove('compPlay');
}

function removePlayerPlay() {
    btnRock.classList.remove('playerPlay');
    btnPaper.classList.remove('playerPlay');
    btnScissors.classList.remove('playerPlay');
}

