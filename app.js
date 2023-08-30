function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || 
             playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
    }
    
    return 2;
}


const generateCPUSelection = () => {
    let randNum = Math.random() * 100;
    if (randNum <= 33) return "Rock";
    else if (randNum <= 66) return "Paper";
    else return "Scissors";
}


function resetGame() {
    playerScore = 0;
    cpuScore = 0;
}


const btns = document.querySelectorAll('.btn');
const container = document.querySelector('.display-round');
let playerSelection, computerSelection;
let playerScore = 0;
let cpuScore = 0;


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = document.createElement('div')
        content.classList.add('result');

        playerSelection = btn.id;
        computerSelection = generateCPUSelection();

        

        if (playRound(playerSelection, computerSelection) === 1) {
            playerScore++;
            content.textContent = "You win! " + playerSelection + " beats " + computerSelection + " (" + playerScore + "-" + cpuScore + ")";
        }
        else if (playRound(playerSelection, computerSelection) === 2) {
            cpuScore++;
            content.textContent = "You lose! " + computerSelection + " beats " + playerSelection + " (" + playerScore + "-" + cpuScore + ")";
        }
        else {
            content.textContent = "Tie";
        }

        if (playerScore === 5 && playerScore > cpuScore ) {
            content.textContent = "GYAAAT DAUMN YOU BETTER THAN A MACHINE DAWG";
            resetGame();
        }
        else if (cpuScore === 5 && cpuScore > playerScore) {
            content.textContent = "... I really think you should find a different game to play ...";
            resetGame();
        }
        
        container.appendChild(content);
    });
});
