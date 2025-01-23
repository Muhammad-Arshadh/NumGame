var yourGuess = document.getElementById("message1")
var NoOfGuess = document.getElementById("message2")
var GuessedNo = document.getElementById("message3")
var button = document.getElementById("btn")
var input = document.getElementById("guess")
const background = document.getElementById("background");
const resetButton = document.getElementById("reset-btn");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_num = [];
var guess_limit = 7;
var game_over = false; // Flag to track if the game is over

function play() {
    var user_guess = input.value;
    if (user_guess < 1 || user_guess > 100 || input.value === "") {
        alert("Enter a number between 1 to 100")
        button.style.pointerEvents = "none";
        return;
    }
    if (no_of_guesses > guess_limit) {
        yourGuess.textContent = `You've reached the maximum number of guesses! The number was ${answer}`;
        game_over = true; // Mark game as over
        yourGuess.style.color = "red"
        button.disabled = true;
        input.disabled = true;
    }

    else {
        guessed_num.push(user_guess);
        no_of_guesses++;

        if (user_guess < answer) {
            yourGuess.textContent = "Your guess is too low";
            addShakeAnimation(yourGuess);
            input.style.backgroundColor = "#ff4c4c";
            input.value = "";// Clear the input field after enter key event
        }

        else if (user_guess > answer) {
            yourGuess.textContent = "Your guess is too high";
            addShakeAnimation(yourGuess);
            input.style.backgroundColor = "#ff4c4c";
            input.value = "";// Clear the input field after enter key event
        }

        else if (user_guess == answer) {
            yourGuess.textContent = "YOU GOT IT!";
            yourGuess.style.color = "green";
            input.style.backgroundColor = "#4caf50";
            game_over = true; // Mark game as over
            addBounceAnimation(yourGuess);
            button.style.pointerEvents = "none";
            input.disabled = true;
            button.disabled = true;

        }

        NoOfGuess.textContent = "No of guess : " + no_of_guesses;
        GuessedNo.textContent = "Guessed No : " + guessed_num;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !game_over) { // Only play if the game is not over
        play();
    }
});
input.addEventListener("input", function () {
    input.style.backgroundColor = ""; // Reset to default
});
// Helper function: Add shake animation for incorrect guesses
function addShakeAnimation(element) {
    element.classList.add("shake");
    element.addEventListener("animationend", () => {
        element.classList.remove("shake");
    });
}

function addBounceAnimation(element) {
    element.classList.add("bounce");
    element.addEventListener("animationend", () => {
        element.classList.remove("bounce");
    });
}

