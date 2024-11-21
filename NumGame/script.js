var answer = math.floor(math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_num = [];

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess<1||user_guess>100){
        alert("Enter a number between 1 to 100")
    }
}