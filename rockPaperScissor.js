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
    console.log("You chose: " + humanChoice)
    console.log("The computer chose: " + computerChoice)

    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        win = true;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        win = true;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        win = true;
    }

    if (humanChoice == computerChoice) {
        window.alert("You tied. Both of you chose " + humanChoice)
    }
    else if (win == true) {
        humanScore++;
        window.alert("You chose: " + humanChoice + "\n" +
                     "The computer chose: " + computerChoice + "\n" + 
                     "You win! " + humanChoice + " beats " + computerChoice + "\n\n" +
                     "Your score: " + humanScore + "\nComputer score: " + computerScore);
    }
    else {
        computerScore++;
        window.alert("You chose: " + humanChoice + "\n" +
                     "The computer chose: " + computerChoice + "\n" + 
                     "You lose! " + computerChoice + " beats " + humanChoice + "\n\n" +
                     "Your score: " + humanScore + "\nComputer score: " + computerScore);
    }
    return
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
if (humanScore > computerScore) {
    window.alert("Congrats, you won.")
}
else if (humanScore == computerScore) {
    window.alert("You tied.")
}
else if (humanScore < computerScore) {
    window.alert("Better luck next time, you lost.")
}