function getComputerChoice() {
    //Assign randomNumber an int between 1 and 3, inclusive
    let randomNumber = Math.floor(Math.random()*3)+1;
    let randomChoice;
    console.log(randomNumber)

    //Assign rock, paper, or scissors as strings to each number between 1 and 3, inclusive
    switch (randomNumber) {
        case 1:
            randomChoice = "Rock";
            break;
        case 2:
            randomChoice = "Scissors";
            break;
        case 3:
            randomChoice = "Paper";
            break;
    }
    return randomChoice;
}

//for testing function output
console.log(getComputerChoice());


