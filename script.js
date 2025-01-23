const yourGuess = document.getElementById("message1")
const NoOfGuess = document.getElementById("message2")
const GuessedNo = document.getElementById("message3")
const button = document.getElementById("btn")
const input = document.getElementById("guess")
const background = document.getElementById("background");
const resetButton = document.getElementById("reset-btn");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_num = [];
let guess_limit = 7;
let game_over = false; // Flag to track if the game is over

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
        disableGame();
        showGameOverUI();
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
            disableGame();
            showGameOverUI();

        }

        NoOfGuess.textContent = "No of guess : " + no_of_guesses;
        GuessedNo.textContent = "Guessed No : " + guessed_num;
    }
}

function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    no_of_guesses = 0; // Reset guess count
    guessed_num = []; // Clear guessed numbers
    game_over = false; // Reset game over flag

    // Reset UI
    yourGuess.textContent = "";
    NoOfGuess.textContent = "No of guesses: 0";
    GuessedNo.textContent = "Guessed numbers: None";
    input.disabled = false;
    button.disabled = false;
    input.value = "";
    input.focus();
    input.style.backgroundColor = ""; // Reset input background color

    // Hide the background (and reset button inside it)
    background.style.display = "none";
}

function showGameOverUI() {
    setTimeout(() => {
    background.style.display = "flex"; 
    },4000);
}


function disableGame() {
    input.disabled = true;
    button.disabled = true;
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

