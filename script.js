let playerScore = 0;
let computerScore = 0;


//computer play random rps
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//play one round of rps
function playRound(playerSelect, computerSelect) {
    if ((playerSelect == 'Rock' && computerSelect == 'Scissors') ||
        (playerSelect == 'Paper' && computerSelect == 'Rock') ||
        (playerSelect == 'Scissors' && computerSelect == 'Paper')) {
            console.log('You Win! ' + playerSelect + ' beats ' + computerSelect);
            playerScore++;
    }

    else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
        console.log('You Lose! ' + computerSelect + ' beats ' + playerSelect);
        computerScore++;
    }

    else {
        console.log('Draw!');
    }
}

//UI


const playerC = document.querySelector('.playerC');
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', function(e) {
    playerC.textContent = "Rock";
});

btnPaper.addEventListener('click', function(e) {
    playerC.textContent = "Paper";
});

btnScissors.addEventListener('click', function(e) {
    playerC.textContent = "Scissors";
});





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

/*
const playerSelect = "Scissors";
const computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
*/