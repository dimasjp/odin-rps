function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelect, computerSelect) {
    if ((playerSelect == 'Rock' && computerSelect == 'Scissors') ||
        (playerSelect == 'Paper' && computerSelect == 'Rock') ||
        (playerSelect == 'Scissors' && computerSelect == 'Paper')) {
            result = ('You Win! ' + playerSelect + ' beats ' + computerSelect)
    }

    else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
        result = ('You Lose! ' + computerSelect + ' beats ' + playerSelect)
    }

    else if (playerSelect == computerSelect); {
        result = ('Draw!')
    }

    document.getElementById('result').innerHTML = result
    return
}