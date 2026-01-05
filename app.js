let userScore = 0;
let compScore = 0;

let userScoreView = document.querySelector("#user-score");
let compScoreView = document.querySelector("#comp-score");

let msg = document.getElementById("msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.textContent = "Game Draw";
    msg.style.backgroundColor = "#062548";
}
const showWinner = (userWin) => {
    if(userWin){
        console.log("You win");
        userScore += 1;
        userScoreView.textContent = userScore;
        msg.textContent = "You Win!";
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lose");
        compScore += 1;
        compScoreView.textContent = compScore;
        msg.textContent = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }else{
            //paper, rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
}
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
