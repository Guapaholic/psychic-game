//Set global variables
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;

//Generate random letter selection
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Function to update remaining guesses
var guessUpdate = function () {
  $('#guessLeft').text("Guesses left: " + guessesLeft);
};

var updateLetterToGuess = function () {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function () {
  $('#let').text("Your Guesses so far: " + guessedLetters.join(' '));
};

//resets game state upon a correct guess or running out of lives
var reset = function () {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];
  updateLetterToGuess();
  guessUpdate();
  updateGuessesSoFar();
}

updateLetterToGuess();
guessUpdate();


//Contained within this function is the event listener for keypress and the logic representing the game rules.
document.onkeyup = function (event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.which).toLowerCase();

  guessedLetters.push(userGuess);
  guessUpdate();
  updateGuessesSoFar();

  if (guessesLeft > 0) {
    if (userGuess === letterToGuess) {
      wins++;
      $('#wins').text("Wins: " + wins);
      alert("You correctly guessed " + letterToGuess + ". CONGRATS!");
      reset();
    }
  } else if (guessesLeft === 0) {

    losses++;
    $('#losses').text("Losses: " + losses);
    alert("You ran out of guesses! The correct letter was " + letterToGuess + ". You lose :(");

    reset();
  }
};
