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
    "acadia",
    "arches",
    "badlands",
    "biscayne",
    "bryce",
    "canyonlands",
    "congaree",
    "denali",
    "everglades",
    "glacier",
    "katmai",
    "olympic",
    "pinnacles",
    "redwood",
    "saguaro",
    "sequoia",
    "shenandoah",
    "yellowstone",
    "yosemite",
    "zion",
    "banff",
    "jasper",
];

//Global variables
var wrongGuess = [];
var userGuess = [];
var dash = [];
var randomWord;
var chosenWords = [];

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
randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);

//create initial array of blank spaces for answers and a loop to continue until letters are guessed
for (var i = 0; i < randomWord.length; i++) {
    dash[i] = "_";
};

//function to reset the game after a win or loss
function reset() {
    wrongGuess = [];
    userGuess = [];
    guessesLeft = 10;
    dash = [];
    userGuessText.textContent = "";
    wrongGuessText.textContent = "";
    guessesLeftText.textContent = "Number of Guesses Left: ";
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);
    for (var i = 0; i < randomWord.length; i++) {
        dash[i] = "_";
    }
};

// funtion to update display



// function to make a letter guess = player's keyboard input
document.onkeyup = function (event) {
    var userGuess = event.key;
    var letterFound = false;




    // this prevents the player from guessing the same letter twice and alerts the player to try a different letter    
    if (wrongGuess.includes(userGuess)) {
        alert("You already guessed this letter");
        return;
    }

    for (var j = 0; j < randomWord.length; j++) {
        if (dash[j] === "_") {
            if (randomWord[j] === userGuess) {
                dash[j] = userGuess;
                letterFound = true;
            }
        }
    }

    // this ends and then restarts the game after a loss
    if (letterFound === false) {
        wrongGuess.push(userGuess);
        guessesLeft -= 1;
        if (guessesLeft < 0) {
            losses++;
            alert("You LOSE! The Word Was: " + randomWord + ". Try Again.");
            reset();

        }
    }

    // this ends and then restarts the game after a win
    if (!dash.includes("_")) {
        wins++;
        alert("You Win! The Word Was: " + randomWord + ". Try Again.");
        reset();

    }

    // Display variables
    userGuessText.textContent = dash.join(" ");
    wrongGuessText.textContent = wrongGuess.join(" ");
    guessesLeftText.textContent = "Number of Guesses Left: " + guessesLeft;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses

};




