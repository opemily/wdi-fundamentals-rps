////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */ move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */ move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch(true){
        case (playerMove === 'rock' && computerMove === 'rock'):
            winner = 'tie';
            break;
        case (playerMove === 'rock' && computerMove === 'paper'):
            winner = 'computer';
            break;
        case (playerMove === 'rock' && computerMove === 'scissors'):
            winner = 'player';
            break;
        case (playerMove === 'paper' && computerMove === 'paper'):
            winner = 'tie';
            break;
        case (playerMove === 'paper' && computerMove === 'rock'):
            winner = 'player';
            break;
        case (playerMove === 'paper' && computerMove === 'scissors'):
            winner = 'computer';
            break;
        case (playerMove === 'scissors' && computerMove === 'scissors'):
            winner = 'tie';
            break;
        case (playerMove === 'scissors' && computerMove === 'rock'):
            winner = 'computer';
            break;
        case (playerMove === 'scissors' && computerMove === 'paper'):
            winner = 'player';
            break;
        default:
            console.log("Invalid input!")
    }
    return winner;
}

function playToFive(playerMove, computerMove) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var winner= getWinner(playerMove, computerMove);
    
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove)
    getWinner(playerMove,computerMove);
    while (playerWins < 5 && computerWins < 5){
        getWinner(playerMove, computerMove);
        if (winner === 'computer'){
            computerWins ++;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins)
        } else if (winner === 'player') {
            playerWins ++;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins)
        } else if (winner === 'tie') {
            console.log ('Tie. Please play again.')
        } 
    }
    return [playerWins, computerWins];
}


