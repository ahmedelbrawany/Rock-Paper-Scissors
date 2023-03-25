function isValid(inputStr) {
    switch (inputStr.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            return true;
        default: return false;
    }

}

function getInput() {
    let input = prompt("Please enter either Rock, Paper, or Scissors")
    while (!isValid(input)) {
        alert("Hmm, looks like your input is invalid. Please try again and be sure of your input.");
        input = prompt("Please enter either Rock, Paper, or Scissors")
    }
    return input.toLowerCase();
}

function getComputerSelection() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, ComputerSelection) {
    if (playerSelection == "rock") {
        switch (ComputerSelection) {
            case "scissors": {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
            case "paper": {
                computerScore++;
                return "You Lose! Paper beats Rock";
            }
            default: return "It's a tie!";
        }

    }
    else if (playerSelection == "paper") {
        switch (ComputerSelection) {
            case "rock": {
                playerScore++;
                return "You Win! Paper beats Rock";
            }
            case "scissors": {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            }
            default: return "It's a tie!";
        }
    }
    else {
        switch (ComputerSelection) {
            case "paper": {
                playerScore++;
                return "You Win! Scissors beats Paper";
            }
            case "rock": {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            }
            default: return "It's a tie!";
        }
    }
}


/* function game() {
    alert("Welcome to Rock Paper Scissors game!")
    let playerSelection;
    for(let i=0; i<5; i++){
        playerSelection = getInput();
        alert(playRound(playerSelection, getComputerSelection())+`\n Player: ${playerScore} \n computer: ${computerScore}`);
    }
    if(playerScore>computerScore){
        alert("YOU WIN Congrats...");
    }else{
        alert("YOU LOSE good luck next time...")
    }
} */



let playerScore = 0;
let computerScore = 0;

let player_options = document.querySelectorAll(".hov")
let result = document.querySelector('.result')
let computer_options = document.querySelectorAll(".comp")

function showPlayerOptions() {
    player_options.forEach(option => option.style.display = 'block')
}

function showComputerOptions() {
    computer_options.forEach(option => option.style.display = 'block')
}

function hidePlayerUnselectedOptions(selectedOption) {
    player_options.forEach(function (other) {
        if (other.getAttribute('data-value') != selectedOption.getAttribute('data-value'))
            other.style.display = "none";

    })
}

function hideComputerUnselectedOptions(selectedOption) {
    computer_options.forEach(function (other) {
        if (other.getAttribute('data-value') != selectedOption)
            other.style.display = "none";

    })
}

function game(playerOption) {
    let computerOption = getComputerSelection();

    let resultStr = `${playRound(playerOption.getAttribute('data-value'), computerOption)}\n
                    Player: ${playerScore} ----------- Computer: ${computerScore}`;

    result.innerText = resultStr;
    hidePlayerUnselectedOptions(playerOption);
    hideComputerUnselectedOptions(computerOption);

    setTimeout(()=>{showComputerOptions(); showPlayerOptions();}, 1000);
}

player_options.forEach(function (option) {
    option.addEventListener('click', (e)=>{game(option)})
});

