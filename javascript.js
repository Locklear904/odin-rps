

function getComputerChoice() {
    //assign random number 1-3 to variable//assign random number 1-3 to variable
    let computerChoice = Math.floor(Math.random() * (4-1) + 1);
    //assign rock paper or scissors to the random number
    if (computerChoice === 1) { 
        computerChoice = "rock";
    }   else if (computerChoice === 2) {
        computerChoice = "paper";
    }   else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let playerChoice = " ";
let computerChoice = getComputerChoice();
let playerScore = 0;

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Please enter rock, paper, or scissors", "");
    playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log("You tied!");
    }   else if (playerChoice === "rock" & computerChoice === "paper") {
        console.log("Paper beats rock, you lose!");
        return --playerScore;
    }   else if (playerChoice === "rock" & computerChoice === "scissors") {
        console.log("Rock beats scissors, you win!");
        return ++playerScore;
    }   else if (playerChoice === "paper" & computerChoice === "rock") {
        console.log("Paper beats rock, you win!");
        return ++playerScore;
    }   else if (playerChoice === "paper" & computerChoice === "scissors") {
        console.log("Scissors beats paper, you lose!");
        return --playerScore;
    }   else if (playerChoice === "scissors" & computerChoice === "rock") {
        console.log("Rock beats scissors, you lose!");
        return --playerScore;
    }   else if (playerChoice === "scissors" & computerChoice === "paper") {
        console.log("Scissors beats paper, you win!");
        return ++playerScore;
    }   else {
        console.log("Please try again!")
    }
}

function game() {
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    if (playerScore > 0) {
        console.log("You win the game!");
    }   else if (playerScore < 0) {
        console.log("You lose the game!");
    }   else {
        console.log("You tied the game!");
    }
}

game();