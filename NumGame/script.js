var yourGuess = document.getElementById("message1")
var NoOfGuess = document.getElementById("message2")
var GuessedNo = document.getElementById("message3")
var button = document.getElementById("btn")
var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_num = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess<1||user_guess>100){
        alert("Enter a number between 1 to 100")
    }
    else{
        guessed_num.push(user_guess);
        no_of_guesses += 1;

        if(user_guess < answer){
            yourGuess.textContent = "Your guess is too low";
            NoOfGuess.textContent = "No of guess : " + no_of_guesses;
            GuessedNo.textContent = "Guessed No : " + guessed_num;

        }
        else if(user_guess > answer){
            yourGuess.textContent = "Your guess is too high";
            NoOfGuess.textContent = "No of guess : " + no_of_guesses;
            GuessedNo.textContent = "Guessed No : " + guessed_num;
        }
        else if(user_guess==answer){
            yourGuess.textContent = "YOU GOT IT!";
            NoOfGuess.textContent = "No of guess : " + no_of_guesses;
            GuessedNo.textContent = "Guessed No : " + guessed_num;
            button.disabled  = true;
        }
    }
}