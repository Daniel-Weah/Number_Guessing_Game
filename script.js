// generating the random number for guessing
const secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

// creating the remaining guesses for the user
let remainingGuesses = 5; // Initialize the number of remaining guesses
let chances = document.getElementById('chances');

let restart = document.getElementById('restart');
let gameOver = document.getElementById('game_over');
let guess = document.getElementById('guess');

function checkGuess() {
    let result =  document.getElementById("result"); //getting the result element from the html code
    
    
    
    const userGuess = parseInt(document.getElementById("guess-input").value); //getting the user input value from the html input field
    
    
    // checking if the user guess is equal to the secret number
    if (userGuess === secretNumber) {
       result.textContent = "Correct! You guessed it!";
       result.style.color = 'green';
    }
    
    // checking if the user guess is higher than the secret number
    else if(userGuess > secretNumber){
        remainingGuesses --;
        chances.textContent = remainingGuesses;
        result.textContent = `Your guess is too high.`;
        
        result.style.color = 'orangered';
    }
    else if(userGuess < secretNumber){
        remainingGuesses --;
        chances.textContent = remainingGuesses;
        result.textContent = `Your guess is too low.`;
        
        result.style.color = 'orangered';
    }
    
    
    else {
        remainingGuesses--; // Decrement the remaining guesses
        if (remainingGuesses > 0) {
            result.textContent = `Try again! You have ${remainingGuesses} ${remainingGuesses === 1 ? "guess" : "guesses"} left.`;

            chances.textContent = remainingGuesses;
        }
        else {
            result.textContent = `Sorry, you're out of guesses! The secret number was ${secretNumber}.`;
            result.style.color = 'red';
            // guess.style.display = 'none';
            // restart.style.display = 'block';
            // gameOver.style.display = 'block';

        }
    }
}
