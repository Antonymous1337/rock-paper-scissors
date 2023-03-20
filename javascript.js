function getComputerChoice() {
    return convertNumberToChoice(Math.floor(Math.random()*3));
}

function convertNumberToChoice(number) {
    switch(number) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function round(playerSelection, computerSelection = getComputerChoice()) {
    // convert playerSelection to string equivalent
    if (typeof playerSelection === "number") playerSelection = convertNumberToChoice(playerSelection);
    

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) return "Tie! " + playerSelection + " ties with " + computerSelection;
    else {
        switch (playerSelection.toLowerCase()) {

            case "rock":
                switch (computerSelection.toLowerCase()) {
                    case "paper":
                        return "You Lose! " + playerSelection + " loses to " + computerSelection;
                    default:
                        return "You Win! " + playerSelection + " beats " + computerSelection;
                }
            break;

            case "paper":
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        return "You Win! " + playerSelection + " beats " + computerSelection;
                    default:
                        return "You Lose! " + playerSelection + " loses to " + computerSelection;
                }
            break;

            case "scissors":
                switch (computerSelection.toLowerCase()) {
                    case "rock":
                        return "You Lose! " + playerSelection + " loses to " + computerSelection;
                    default:
                        return "You Win! " + playerSelection + " beats " + computerSelection;
                }
            break;

        }
    }
}

function game() {
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        if (playerWins === 3) {
            console.log("You won against the computer 3 times out of 5!");
            break;
        } else if (i-playerWins >= 3) {
            console.log("You lost against the computer 3 times out of 5");
            break;
        }

        playerSelection = prompt("Choose your move: Rock, Paper, or Scissors");
        result = round(playerSelection);
        console.log(result);

        if (result.charAt(4) === "W") playerWins++;
        else if (result.charAt(4) != "L") i--; // tie condition
    }
}

game();