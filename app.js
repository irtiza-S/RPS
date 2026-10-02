const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const reset = document.getElementById('reset')
const message = document.getElementById('text')
let computerScore = document.getElementById('cScore')
let playerScore = document.getElementById('pScore')
// var playerChoice = ''
let comptally = 0
let playertally = 0
let gameOver = false


reset.addEventListener('click', resetGame)

rock.addEventListener('click', () => playRound('rock'))

paper.addEventListener('click', () => playRound('paper'))

scissors.addEventListener('click', () => playRound('scissors'))

function playRound(playerSelection) {
    if (gameOver) return
    playerChoice = playerSelection
    let compChoice = getCompChoice()


    console.log(`player choice: ${playerChoice}, computer choice: ${compChoice}`)

    let result = winner(playerChoice, compChoice)
    
    if (result === 'player') {
        playertally += 1
        playerScore.textContent = playertally
        message.textContent = 'player has won that round!'
    }
    else if (result === 'draw') {
        message.textContent = 'draw!'
    }
    else {
        comptally += 1
        computerScore.textContent = comptally
        message.textContent = 'computer has won that round!'
    }

    console.log(`player score: ${playertally}, computer score: ${comptally}`)
    let roundWinner = endGame(playertally, comptally)
    if (roundWinner === 'a') {
        message.textContent = 'Player is the winner!'

    } else if (roundWinner === 'b'){
        message.textContent = 'Computer is the winner!'
    } 
    
}


function getCompChoice() {
    let choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function resetGame() {
    playertally = 0
    comptally = 0
    gameOver = false
    playerScore.textContent = 0
    computerScore.textContent = 0
    message.textContent = ''
}

function winner(a, b) {
    //draw
    if (a === b) return 'draw'
    if (a === 'rock' && b === 'scissors') return 'player'
    if (a === 'paper' && b === 'rock') return 'player'
    if (a === 'scissors' && b === 'paper') return 'player'
    return 'computer'
}

function endGame(a, b) {
    if (a !== 5 && b!= 5) return
    let winner = ''
    if (a === 5) {
        winner = 'a'
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        gameOver = true
        return winner
    } 
    winner = 'b'
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
    gameOver = true
    return winner
}