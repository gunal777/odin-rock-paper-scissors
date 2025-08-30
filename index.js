let choices = ["rock", "paper", "scissor"];
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3);
    console.log(computer_choice);
    return choices[computer_choice];
}

function getPlayerChoice() {
    const clickedElement = event.target;
    const playerChoice = clickedElement.value;
    
    console.log("Player chose:", playerChoice);

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        humanScore++;
        document.getElementById("result").textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
        console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice) {
        console.log(`Tie!`);
        document.getElementById("result").textContent = `Tie! Both chose ${humanChoice}`;
    }
    else {
        computerScore++;
        console.log(`You Lost! ${computerChoice} beats ${humanChoice}`);
        document.getElementById("result").textContent = `You Lost! ${computerChoice} beats ${humanChoice}`;
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    const playerSc = document.getElementById("playerScore");
    const computerSc = document.getElementById("computerScore");
    
    playerSc.textContent = `Player Score: ${humanScore}`;
    computerSc.textContent = `Computer Score: ${computerScore}`;
    
    playerSc.style.display = "block";
    computerSc.style.display = "block";

    if(humanScore == 5)
    {
        playerSc.style.display = "none";
        computerSc.style.display = "none";
        document.getElementById("result").textContent = `Player Score: ${humanScore} Player Wins!! the Game`;
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5)
    {
        playerSc.style.display = "none";
        computerSc.style.display = "none";
        document.getElementById("result").textContent = `Computer Score: ${computerScore} Computer Wins!! the Game`;
        computerScore = 0;
        humanScore = 0;
    }
}

