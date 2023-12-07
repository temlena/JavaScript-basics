// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.
function numberGuess(num){
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (num > randomNumber) {
    return 'Number is too high'
  } else if (num < randomNumber) {
    return 'Number is too low'
  } else {
    return 'Correct!,You guessed right'
  }
}
}
console.log(numberGuess(56))
