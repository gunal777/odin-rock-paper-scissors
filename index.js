let choices = ["rock", "paper", "scissor"];
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3);
    console.log(computer_choice);
    return choices[computer_choice];
}

function getPlayerChoice() {
    while (true) {
        const choice = (window.prompt("Enter Your Choice:\n 1: Rock \n 2: Paper \n 3: Scissor", 0) - 1);
        if (choice < 0 || choice > 2) {
            console.log("Please enter a valid choice");
            continue;
        }
        else {
            return choices[choice];
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice) {
        console.log(`Tie!`);
    }
    else {
        computerScore++;
        console.log(`You Lost! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const comp_choice = getComputerChoice();
        const user_choice = getPlayerChoice();
        playRound(user_choice, comp_choice);
        console.log(`Player Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}

playGame();