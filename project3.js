var guessNum = document.querySelector(".guessNum");
var submitGuess = document.querySelector(".submitGuess");
var answers = document.querySelector(".answers");
var hints = document.querySelector(".hints");
var score = document.querySelector(".score");
var playAgain = document.querySelector(".reset")

submitGuess.addEventListener("click", inputValidation);
playAgain.addEventListener("click", resetfunction);


let secretNum = Math.floor(Math.random() * 100) + 1;
console.log(secretNum)


let gamescore = 10
score.textContent= "Score:" + gamescore;

function resetfunction() {
    let secretNum = Math.floor(Math.random() * 100) + 1;
    console.log(secretNum)
    alert("Secret Number has been reset.")
}


guessNum.focus();

function inputValidation() {
    var userInput = Number(guessNum.value);
    
    if (userInput < 0) {
        alert("Number must be equal or greater than 0.");
        score.textContent= "Score:"+ gamescore - 1;
    } else if (userInput > 100) {
        alert("Number must be equal or less than 100.");
        score.textContent = "Score:" + gamescore - 1;
    }

    if (userInput === secretNum) {
    answers.textContent = "Congratulations, you win!";
    answers.style.background = 'lightgreen';
    score.textContent = "Score:" + gamescore;
    } else if (userInput > secretNum) {
        answers.textContent = "Too high, try again.";
        answers.style.background = 'red';
        score.textContent ="Score:" + gamescore - 1;
    } else if (userInput < secretNum) {
        answers.textContent = 'Too low, try again.';
        answers.style.background = 'red';
        score.textContent = "Score:" + gamescore - 1;
    }

}
