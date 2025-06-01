let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#u-score");
const comScorepara=document.querySelector("#c-score");

const drawGame = () => {
    console.log("Game Is Draw");
    msg.innerText="Game Draw! Play Again.";
    msg.style.backgroundColor="black";
    
}

const showWinner = (userWin,userChoice,comChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText=userScore;

        console.log("Congratulations You Win!");
        msg.innerText="Congratulations You Win!";
        msg.style.backgroundColor="green";
    } else {
        comScore++
        comScorepara.innerText=comScore;
        console.log("You Lose!");
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
}
const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const cmpChoice = Math.floor(Math.random() * 3);
    return options[cmpChoice];
}


const playgame = (userChoice) => {
    console.log("user Choice:", userChoice);
    const comChoice = computerChoice();
    console.log("Computer Choice:", comChoice);

    if (userChoice === comChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper or scissors
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock or scissors
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            //rock or paper
            userWin = comChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,comChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

    });


});



