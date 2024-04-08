const initGame = () => {
    const startGame = confirm("Shall we play rock, paper or scissors?");
    startGame ? playGame() : alert('Ok, maybe next time.')
}

// game function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === '') {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice()
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
}

// helper functions
const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
}

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === '') {
        return playerChoice.trim().toLocaleLowerCase();
    } else {
        return false;
    }
}

const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.")
}

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === 'rock' ||
        playerChoice === 'paper' ||
        playerChoice === 'scissors'
    ) {
        return playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1);
    } else {
        return false;
    }
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"]
    return rpsArray[randomNumber].at(0).toUpperCase() + rpsArray[randomNumber].substring(1);
}

const determineWinner = (player, computer) => {
    const winner =
        player === computer
            ? "Tie Game"
            : player === "rock" && computer === "paper"
                ? `Player One: ${player}\nComputer: ${computer}\nComputer wins!`
                : player === "paper" && computer === "scissors"
                    ? `Player One: ${player}\nComputer: ${computer}\nComputer wins!`
                    : player === "scissors" && computer === "rock"
                        ? `Player One: ${player}\nComputer: ${computer}\nComputer wins!`
                        : `Player One: ${player}\nComputer: ${computer}\nPlayer One wins!`;
    return winner;
}


const displayResult = (winner) => {
    alert(winner);
}

const askToPlayAgain = () => {
    return confirm('Play again?');
}

const thanksForPlaying = () => {
    alert('Ok, thanks for playing.');
}

initGame();
