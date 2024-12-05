/**********
 * Rock Paper Scissors - UI addition
 * 
 * 
 **********/

console.log(document.querySelectorAll('button'));

const btn = Array.from(document.querySelectorAll('button'));

const consoleDiv = document.querySelector('#console');

const playerScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerScore');


document.addEventListener('DOMContentLoaded', (e) => {
    btn.forEach((element) => {
        element.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            consoleDiv.textContent = `Player chose ${element.id}! | Computer chose `;
            consoleDiv.textContent += `${computerChoice}!`;
            return playRound(element.id, computerChoice);
        })
    })
});

function getComputerChoice() {
    const choice = Math.round(Math.random()) + Math.round(Math.random());
    let final = null;

    switch (choice) {
        case 0:
            final = 'rock';
            break;
        case 1:
            final = 'paper';
            break;
        case 2:
            final = 'scissors';
            break;
        default:
            final = 'error'
    }
    return final
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

resetGame = () => {
    roundsPlayed = 0;
    humanScore = 0;
    computerScore = 0;
}

playRound = (humanChoice, computerChoice) => {
    let combinedResult = humanChoice + '-' + computerChoice;
    console.log(roundsPlayed);
    roundsPlayed++;

    evaluateRounds = () => {
        if (roundsPlayed === 5) {
            if (humanScore > computerScore) {
                resetGame();
                alert('Player wins!');
            } else if (computerScore > humanScore) {
                resetGame();
                alert('Computer wins!');
            }
            resetGame();
            alert("It's a tie!");
        }
    }
    switch (combinedResult) {
        case 'rock-rock':
            console.log('Rock : Rock - Tie!');
            evaluateRounds();
            break;
        case 'rock-paper':
            console.log('Rock : Paper - Computer won round ' + roundsPlayed + ".");
            computerScore++
            computerScoreDiv.textContent = computerScore;
            evaluateRounds();
            break;
        case 'rock-scissors':
            console.log('Rock : Scissors - Player won round ' + roundsPlayed + ".");
            humanScore++
            playerScoreDiv.textContent = humanScore;
            evaluateRounds();
            break;
        case 'paper-paper':
            console.log('Paper : Paper - Tie!');
            evaluateRounds();
            break;
        case 'paper-rock':
            console.log('Paper : Rock - Player won round ' + roundsPlayed + ".");
            humanScore++
            playerScoreDiv.textContent = humanScore;
            evaluateRounds();
            break;
        case 'paper-scissors':
            console.log('Paper : Scissors - Computer won round ' + roundsPlayed + ".");
            computerScore++
            computerScoreDiv.textContent = computerScore;
            evaluateRounds();
            break;
        case 'scissors-scissors':
            console.log('Scissors : Scissors - Tie!');
            break;
        case 'scissors-rock':
            console.log('Scissors : Rock - Computer won round ' + roundsPlayed + ".");
            computerScore++
            computerScoreDiv.textContent = computerScore;
            evaluateRounds();
            break;
        case 'scissors-paper':
            console.log('Scissors : Paper - Player won round ' + roundsPlayed + ".");
            humanScore++
            playerScoreDiv.textContent = humanScore;
            evaluateRounds();
            break;
    }

}