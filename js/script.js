// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
});

$("#shoot").click(function() {
    var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice <= 0.33) {
computerChoice = "Rock";
} else if (computerChoice <=0.66) {
computerChoice = "Paper";
} else {
computerChoice = "Scissors";
}
$("#computerChoice").text($("#input").val());
});





// DOCUMENT READY FUNCTION BELOW

