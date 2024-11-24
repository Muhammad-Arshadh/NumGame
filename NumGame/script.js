var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")
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
            msg1.textContent = "Your guess is too low";
            msg2.textContent = "No of guess : " + no_of_guesses;
            msg3.textContent = "Guessed No : " + guessed_num;

        }
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high";
            msg2.textContent = "No of guess : " + no_of_guesses;
            msg3.textContent = "Guessed No : " + guessed_num;
        }
        else if(user_guess==answer){
            msg1.textContent = "YOU GOT IT!";
            msg2.textContent = "No of guess : " + no_of_guesses;
            msg3.textContent = "Guessed No : " + guessed_num;

        }
    }
}