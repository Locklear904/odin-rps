
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4-1) + 1); //assign random number 1-3 to variable
    if (computerChoice === 1) { //if number is certain number - assign rock paper or scissors string to variable
        computerChoice = "Rock";
    }   else if (computerChoice === 2) {
        computerChoice = "Paper";
    }   else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    //return computerChoice;//return the string
}