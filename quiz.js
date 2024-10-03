function checkAnswer() {
    let correctAnswer = "4";
    let UserAnswer = document.querySelector('input[name="quiz"]:checked').value;

    if(correctAnswer === UserAnswer ){

        document.getElementById("feedback").textContent = "Correct ! Well done"
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }
}

let submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);