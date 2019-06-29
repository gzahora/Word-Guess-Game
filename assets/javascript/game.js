//Writing Psuedo Code for step

/*
1) Have computer choose a word randomly from an array I provide
2) Display that word as blank spaces until letters are guessed
3) have user input guess
4) show player their progress
    4a) if they guess of a letter was correct, display the letters
    4b) else if they guess the word, show the word and increase the score by one
    4c) else tell the player they were wrong and decrease the number of guesses left
*/

//-----------------------------------------------------

//Word array
var wordList = [
    "solar",
    "wind",
    "hydropower",
    "nuclear",
    "geothermal",
    "biomass",
    "geoengineering",
    "renewable",

];

var wrongGuess = [];
var userGuess = [];

const maxGuesses = 10;
var wins = 0;
var losses = 0;
var guessesLeft = 10;

var userGuessText = document.getElementById("userGuess-text");
var randomWordText = document.getElementById("randomWord-text");
var wrongGuessText = document.getElementById("wrongGuess-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");



//computer picks a word from the array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord)

//create initial array of blank spaces for answers and a loop to continue until letters are guessed
var dash = [];

for (var i = 0; i < randomWord.length; i++) {
    dash[i] = "_";

};

function reset() {
    wrongGuess = [];
    userGuess = [];
    guessesLeft = 10;
    dash = [];
    userGuessText.textContent = "";
    wrongGuessText.textContent = "";
    guessesLeftText.textContent = "Number of Guesses Left: ";
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    var letterFound = false;
    
    if (wrongGuess.includes(userGuess)) {
        alert("You already guessed this letter");
        console.log("Sup browsk");
        return;
    }

    for (var j = 0; j < randomWord.length; j++) {
        if (dash[j] === "_") {
            if (randomWord[j] === userGuess) {
                dash[j] = userGuess;     //replace "_" with letter
                letterFound = true; // if no dashes left, increase win counter and display winner message the answer ___, then reset game
            }
        }
    }
    if (letterFound === false) {
        wrongGuess.push(userGuess);
        guessesLeft -= 1;
            if (guessesLeft < 0) {
                losses++;
                reset();
            }
    }

    if (!dash.includes("_")) {
        wins++;
        reset();
    }



    //does dash array include userGuess

    // if it doesn't, increase wrong guess counter && display wrong guess in wrongGuess array
    //check if wrongGuess.length === maxGuesses
    //if wrongGuess.length === maxGuesses then increase lose counter && display loser message && reset game

    // Display variables
    userGuessText.textContent = dash.join(" ");
    wrongGuessText.textContent = wrongGuess.join(", ");
    guessesLeftText.textContent = "Number of Guesses Left: " + guessesLeft;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses

};




