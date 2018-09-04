const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resetButton = document.querySelector('#reset')
let game1
const wordCount = 3;

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach(letter => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    });
  
    
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game1 = new Hangman(puzzle, 5)
    puzzleEl.textContent = game1.puzzle
    render()
}

resetButton.addEventListener('click', () => startGame())
startGame()

getPuzzle(wordCount)
  .then(data =>  console.log(data))
  .catch(err =>  console.log(err));

/* const countryCode = 'PL'

getLocation()
    .then(data => getCountry(data.country))
    .then(data => console.log(data))
    .catch(err => console.log(err))

getCurrentCountry().then(data => console.log(data)) */
/* fetch('http://puzzle.mead.io/puzzle', {}).then(response => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.puzzle);
}).catch((err) => {
    console.log(err);
})
 */