

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

let playerChoice = prompt("Please enter rock, paper, or scissors", "");
let computerChoice = getComputerChoice();

function playRound(playerChoice, computerChoice) {
    playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log("You tied!");
    }   else if (playerChoice === "rock" & computerChoice === "paper") {
        console.log("Paper beats rock, you lose!");
    }   else if (playerChoice === "rock" & computerChoice === "scissors") {
        console.log("Rock beats scissors, you win!");
    }   else if (playerChoice === "paper" & computerChoice === "rock") {
        console.log("Paper beats rock, you win!");
    }   else if (playerChoice === "paper" & computerChoice === "scissors") {
        console.log("Scissors beats paper, you lose!");
    }   else if (playerChoice === "scissors" & computerChoice === "rock") {
        console.log("Rock beats scissors, you lose!");
    }   else if (playerChoice === "scissors" & computerChoice === "paper") {
        console.log("Scissors beats paper, you win!");
    }   else {
        console.log("Please try again!")
    }
}

playRound(playerChoice, computerChoice);