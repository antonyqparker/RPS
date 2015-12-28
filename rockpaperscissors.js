
function getInput() {
    console.log();
    var answer = prompt("Please choose either rock, paper or scissors");
    return answer;
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

function getPlayerMove(move) {
    return move||getInput();
}

function getComputerMove(move) {
    return move||randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
 if (playerMove === computerMove){
        return "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "paper" ) {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock" ) {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }

    return winner;
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
while (playerWins < 5 && computerWins < 5) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    winner = getWinner(playerMove, computerMove);
     if (winner === "player") {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('player won this round!')
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }else if (winner === "computer") {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove)
            console.log('computer won this round!')
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }else {
            console.log("Player chose " + playerMove + " while computer chose " + computerMove);
            console.log("Player and computer have tied this round!");
            console.log("The score is currently Player: " + playerWins + " to Computer: " + computerWins + ".")
           }
            
    }
     return "The final score is Player: " + playerWins + " to Computer: " + computerWins + ". Thank your for playing RPS!";
}
 
playToFive();
  
  
  
  
  
  



