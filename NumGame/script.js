var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")

var answer = math.floor(math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_num = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess<1||user_guess>100){
        alert("Enter a number between 1 to 100")
    }
}