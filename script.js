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

//for testing function output
console.log(getComputerChoice());
console.log(getHumanChoice());


