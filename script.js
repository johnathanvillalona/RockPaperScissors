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


function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let compChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    function playRound(humanChoice, computerChoice) {
        console.log(`Computer chose : ${computerChoice}`);
        console.log(`You chose : ${humanChoice}`);

        if (humanChoice === computerChoice) {
            console.log("The game is a draw...");
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Sorry, you lose!");
                computerScore+=1;
            } else {
                console.log("You WIN!");
                humanScore+=1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You WIN!");
                humanScore+=1;
            } else {
                console.log("Sorry, you lose!");
                computerScore+=1;
            }
        } else {
            if (computerChoice === "rock") {
                console.log("You WIN!");
                humanScore+=1;
            } else {
                console.log("Sorry, you lose!");
                computerScore+=1;
            }
        }
    }
    
    for (let i = 1; i < 5; i++) {
        console.log(`My Score: ${humanScore}  |  Computer Score: ${computerScore} \n`);
        playRound(humanChoice, compChoice);
        console.log("____________________________ \n");
        compChoice = getComputerChoice();
        humanChoice = getHumanChoice();
    }    

    if (computerScore > humanScore) {
        console.log(`My Score: ${humanScore}  |  Computer Score: ${computerScore} \n`);
        console.log("The computer won the best of 5.");
    } else if (computerScore < humanScore) {
        console.log(`My Score: ${humanScore}  |  Computer Score: ${computerScore} \n`);
        console.log("You have won best of 5.");
    } else {
        console.log(`My Score: ${humanScore}  |  Computer Score: ${computerScore} \n`);
        console.log("Draw. No winners in the best of 5");
    }
}



playGame();