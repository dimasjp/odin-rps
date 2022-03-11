function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelect, computerSelect) {
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

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}

/*
const playerSelect = "Scissors";
const computerSelect = computerPlay();
console.log(playRound(playerSelect, computerSelect));
*/