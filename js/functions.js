const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let guessCount = 0

const newGame = () => {
    const random = Math.floor(Math.random() * words.length)
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord) 

    output.innerHTML = maskedWord
    guessCount = 0
    span.innerHTML = guessCount
}

const win = () => {
    alert(`You have guessed right, word is  ${randomizedWord}. You needed ${guessCount} guesses!`)
    newGame()
}

const replaceFoundChars = (guess) => {
    let newString = maskedWord.split('')
    for (let i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i].toLowerCase() === guess.toLowerCase()) {
            newString[i] = randomizedWord[i]
        }
    }
    maskedWord = newString.join('')
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        
        const guess = input.value.toLowerCase();
        input.value = ''
        
        if (guess === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            guessCount++
            span.innerHTML = guessCount

            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win();
            }
        } else {
            alert("You guessed wrong!.")
        }
    }
})