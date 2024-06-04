let secretNumber = Math.floor(Math.random() * 100) + 1;

let remainingGuesses = 5; // Initialize the number of remaining guesses
const chances = document.getElementById("chances");
const restart = document.getElementById("restart");
const gameOver = document.getElementById("game_over");
const guess = document.getElementById("guess");
const displayChances = document.getElementById("chancesDisplay");
const result = document.getElementById("result");

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess-input").value); // Get the user input value from the HTML input field

  if (userGuess === secretNumber) {
    result.textContent = "Correct! You guessed it!";
    result.style.color = "green";
    guess.style.display = "none";
    restart.style.display = "inline";
  } else {
    remainingGuesses--; // Decrement the remaining guesses
    if (remainingGuesses > 0) {
      if (userGuess < secretNumber) {
        result.textContent = `Your guess ${userGuess} is lower!`;
      } else if (userGuess > secretNumber) {
        result.textContent = `Your guess ${userGuess} is higher!`;
      }
      chances.textContent = remainingGuesses;
    } else {
      result.textContent = `Sorry, you're out of guesses! The secret number was ${secretNumber}.`;
      result.style.color = "red";
      guess.style.display = "none";
      restart.style.display = "inline";
      gameOver.style.display = "block";
      displayChances.style.display = "none";
    }
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  remainingGuesses = 5;
  chances.textContent = remainingGuesses;
  guess.style.display = "inline";
  restart.style.display = "none";
  gameOver.style.display = "none";
  displayChances.style.display = "block";
  result.textContent = "";
  result.style.color = "";
  document.getElementById("guess-input").value = "";
}

restart.addEventListener("click", restartGame);
