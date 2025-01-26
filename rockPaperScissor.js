function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "Rock";
    }
    else if (randNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose from the following: \n 1. Rock\n 2. Paper\n 3. Scissors");
    if (choice == "1") {
        return "Rock";
    }
    else if (choice == "2") {
        return "Paper";
    }
    else if (choice == "3") {
        return "Scissors";
    }
    else {
        console.log("Choose a number between 1 and 3")
    }
}

function playRound(humanChoice, computerChoice) {
    let win = false;
  
    if (humanChoice == "Rock" && computerChoice == "Scissors"){
        win = true;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        win = true;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        win = true;
    }

    if (humanChoice == computerChoice) {
        console.log("You tied. Both of you chose " + humanChoice)
    }
    else if (win == true) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    return
}


let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection)

playRound(humanSelection, computerSelection);
