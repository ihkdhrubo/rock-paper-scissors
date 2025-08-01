function getComputerChoice() {
    let randInt = (Math.floor(3 * Math.random()) + 1);
    switch (randInt) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors";
    }
}


let getUserChoice = () => prompt("Rock, Paper Scissors, shoot!");

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Tie!")
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You won this round!")
        humanScore++;
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("Computer won this round!")
        computerScore++
    }
    else {
        console.log("Invalid Input")
    }
}

function playGame(callback) {
    for (let i = 1; i <= 5; i++) {
        callback(getUserChoice(), getComputerChoice());
    }
    humanScore > computerScore ? console.log("Human Won!") : humanScore = computerScore ? console.log("It's a Tie!") : console.log("Computer Won!");
}


playGame(playRound);






