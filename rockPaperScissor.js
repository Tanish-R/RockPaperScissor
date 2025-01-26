function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    console.log(randNum)
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
    let choice = prompt("Choose from the following: \n 1. Rock\n 2.Paper\n 3.Scissors");
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

let ans = getHumanChoice();
console.log(ans);