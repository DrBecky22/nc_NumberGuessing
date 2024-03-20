




function runGame() {
    const targetNum = Math.floor(Math.random() * 100) + 1;
    let guesString = '';   //do we need this if we use the Number() method below? A: no
    let guessNum = 0; 
    let correct = false; // do we need to declare this here if it is also declared in checkGuess()?  Yes, this is the originating version of "correct" that gets updated in the blocks below
    let numTries = 0;

    do {
        guessNum = Number(prompt('guess a number between 1 and 100 \n\n'));
            if (guessNum === null) {
                alert('Game Canceled - click button to start again');
                return;  // is this supposed to be here? yes, 'return' ends the loop if the person pushed cancel
            }
        console.log(guessNum);
        numTries++;
        correct = checkGuess(guessNum, targetNum); //this calls the checkGuess function, the return value of that function becomes the value of 'correct'
    } while (!correct);
    alert('You guessed the number in ' + numTries ' guesses'); // why do you do this here instead of at the end of the if, else if, else?
}

function checkGuess(guessNum, targetNum) {
    correct = false;
    if (guessNum === NaN) {   //is this the same as (isNaN(guessNum) ?)
        alert('That is not a number, try again');
    } else if ((guessNum < 1) || (guessNum >100)) {
        alert('That number is outside the game range, please try again with a number between 1-100');
    } else if (guessNum > targetNum) {
        alert('your guess is too high, try a smaller number');
    } else if (guessNum < targetNum) {
        alert('Your guess is too small, try a bigger number');
    } else //(guessNum === targetNum)  --- this conditional is not necessary b/c we have ruled out all the possible wrong versions above
        {
        //alert('you guessed it! It only took you ' + numTries + ' guesses');  why doesn't this go here? A:  Once the loop terminates, it is safe to assume the user got the right answer... 
        correct = true;
        // console.log(correct);
    }
    return correct;
}