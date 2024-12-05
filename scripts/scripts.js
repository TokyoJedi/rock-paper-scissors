
function getHumanChoice() {
    return prompt("What's your choice?").toLowerCase()
}

function getComputerChoice() {
    const choice = Math.round(Math.random()) + Math.round(Math.random());
    let final = null;

    switch (choice) {
        case 0:
            final = "rock";
            break;
        case 1:
            final = "paper";
            break;
        case 2:
            final = "scissors";
            break;
        default:
            final = "error"
    }
    return final
}


function playGame(roundstoPlay) {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(roundsPlayed, roundstoPlay);

    function playRound(humanChoice, computerChoice) {
        let combinedResult = humanChoice + "-" + computerChoice;
        console.log(roundsPlayed);

        switch (combinedResult) {
            case "rock-rock":
                console.log("Rock : Rock - Tie!");
                break;
            case "rock-paper":
                console.log("Rock : Paper - Computer wins!");
                computerScore++
                break;
            case "rock-scissors":
                console.log("Rock : Scissors - Player wins!");
                humanScore++
                break;
            case "paper-paper":
                console.log("Paper : Paper - Tie!");
                break;
            case "paper-rock":
                console.log("Paper : Rock - Player wins!");
                humanScore++
                break;
            case "paper-scissors":
                console.log("Paper : Scissors - Computer wins!");
                computerScore++
                break;
            case "scissors-scissors":
                console.log("Scissors : Scissors - Tie!");
                break;
            case "scissors-rock":
                console.log("Scissors : Rock - Computer wins!");
                computerScore++
                break;
            case "scissors-paper":
                console.log("Scissors : Paper - Player wins!");
                humanScore++
                break;
        }

    }

    while (roundsPlayed < roundstoPlay) {
        console.log("if statement reached " + roundsPlayed);
        roundsPlayed++;
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    return humanScore > computerScore ? console.log("Player wins!") : console.log("Computer wins!");
}

playGame(5);