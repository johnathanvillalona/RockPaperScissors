let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    //Assign randomNumber an int between 1 and 3, inclusive
    let randomNumber = Math.floor(Math.random()*3)+1;
    let randomChoice;

    //Assign rock, paper, or scissors as strings to each number between 1 and 3, inclusive
    switch (randomNumber) {
        case 1:
            randomChoice = "rock";
            break;
        case 2:
            randomChoice = "scissors";
            break;
        case 3:
            randomChoice = "paper";
            break;
    }
    return randomChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Type rock, paper, or scissors: ").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("The game is a draw...");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Sorry, you lose!");
            computerScore++;
        } else {
            console.log("You WIN!");
            humanScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("You WIN!");
            humanScore++;
        } else {
            console.log("Sorry, you lose!");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You WIN!");
            humanScore++;
        } else {
            console.log("Sorry, you lose!");
            computerScore++;
        }
    }
}

const compChoice = getComputerChoice();
const humanChoice = getHumanChoice();
console.log(`Computer chose : ${compChoice}`)
console.log(`You chose : ${humanChoice}`)
playRound(humanChoice, compChoice);

