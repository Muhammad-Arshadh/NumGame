var yourGuess = document.getElementById("message1")
var NoOfGuess = document.getElementById("message2")
var GuessedNo = document.getElementById("message3")
var button = document.getElementById("btn")
var input = document.getElementById("guess")
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_num = [];
var guess_limit = 7;

function play() {
    var user_guess = input.value;
    if (user_guess < 1 || user_guess > 100 || input.value === "") { //Need to disable button and hover before entering a valid input 
        alert("Enter a number between 1 to 100")
        button.style.pointerEvents = "none";
    }
    if (no_of_guesses > guess_limit) {
        yourGuess.textContent = "You've reached the maximum number of guesses!";
        button.disabled = true;
        input.disabled = true;
    }

    else {
        guessed_num.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            yourGuess.textContent = "Your guess is too low";
        }

        else if (user_guess > answer) {
            yourGuess.textContent = "Your guess is too high";
        }

        else if (user_guess == answer) {
            yourGuess.textContent = "YOU GOT IT!";
            button.disabled = true;
            button.style.pointerEvents = "none";
            input.disabled = true;
        }

        NoOfGuess.textContent = "No of guess : " + no_of_guesses;
        GuessedNo.textContent = "Guessed No : " + guessed_num;
    }
    input.value = "";// Clear the input field after enter key event
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        play();
    }
});