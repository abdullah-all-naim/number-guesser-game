const randomInt = Math.floor(Math.random() * (10-1) + 1)
const state = false
console.log(randomInt)

const gameFunction = (guessedNumber, randomInt) => {
    if (guessedNumber < randomInt) {
        alert('Correct ans is greater')
        return 'Correct ans is greater'
    }
    else if (guessedNumber > randomInt) {
        alert('Correct ans is smaller')
        return 'Correct ans is smaller'
    }
    else {
        return 'Correct'
    }
}
document.getElementById('start').addEventListener('click', () => {
    for (i = 0; i < 3; i++) {
        alert('Take a guess. You have ' + String(3 - i) + ' guesses left')
        const takeInput = prompt('Guess a number')
        if(takeInput == ''){
            state = false
            break
        }
        else{
            if (gameFunction(takeInput, randomInt) === 'Correct') {
                document.getElementById('result').innerHTML = 'You win'
                state = true
                break
            }
        }
    }
    if (!state) {
        document.getElementById('result').innerHTML = 'You lose'
    }
})
