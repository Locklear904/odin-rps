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
let computerChoice = " ";
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScoreContainer = document.querySelector('#playerScoreContainer');
const computerScoreContainer = document.querySelector('#computerScoreContainer');
const gameText = document.querySelector('#gameText');

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        gameText.textContent = "You tied!";
    }   else if (playerChoice === "rock" & computerChoice === "paper") {
        gameText.textContent = "Paper beats rock, you lose the round!";
        computerScoreContainer.textContent = ++computerScore;
    }   else if (playerChoice === "rock" & computerChoice === "scissors") {
        gameText.textContent = "Rock beats scissors, you win the round!";
        playerScoreContainer.textContent = ++playerScore;
    }   else if (playerChoice === "paper" & computerChoice === "rock") {
        gameText.textContent = "Paper beats rock, you win the round!";
        playerScoreContainer.textContent = ++playerScore;
    }   else if (playerChoice === "paper" & computerChoice === "scissors") {
        gameText.textContent = "Scissors beats paper, you lose the round!";
        computerScoreContainer.textContent = ++computerScore;
    }   else if (playerChoice === "scissors" & computerChoice === "rock") {
        gameText.textContent = "Rock beats scissors, you lose the round!";
        computerScoreContainer.textContent = ++computerScore;
    }   else if (playerChoice === "scissors" & computerChoice === "paper") {
        gameText.textContent = "Scissors beats paper, you win the round!";
        playerScoreContainer.textContent = ++playerScore;
    }   else {
        gameText.textContent = "Please try again!";
    }
    if (playerScore >= 5) {
        gameText.textContent = "You win the game!";
        playerScore = 0;
        playerScoreContainer.textContent = playerScore;
        computerScore = 0;
        computerScoreContainer.textContent = computerScore;
    }   
    if (computerScore >= 5) {
        gameText.textContent = "You lost the game!";
        playerScore = 0;
        playerScoreContainer.textContent = playerScore;
        computerScore = 0;
        computerScoreContainer.textContent = computerScore;
    }
}

rockBtn.addEventListener('click', function() {
    playRound('rock', computerChoice);
});
paperBtn.addEventListener('click', function() {
    playRound('paper', computerChoice);
});
scissorsBtn.addEventListener('click', function() {
    playRound('paper', computerChoice);
});

/*function fiveRoundGame() {
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

fiveRoundGame();*/