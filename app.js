const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const reset = document.querySelector('#reset'); 
let cScore = document.querySelector('#cScore');
let pScore = document.querySelector('#pScore');
let textBoard = document.querySelector('#text');
let playerSelection;
let compTally = 0;
let playerTally = 0;
let compChoice = new Array('Rock', 'Paper', 'Scissors');
let round = 0;

function computerPlay(lst){
    let randomitem = lst[Math.floor(Math.random()*lst.length)];
    return randomitem;
}


rock.addEventListener('click', function(){
    playerSelection = rock.value = 'rock';
    let computerSelection = computerPlay(compChoice);
    cScore.innerHTML = compTally;
    pScore.innerHTML = playerTally;
    
    if (playerSelection == 'rock' && computerSelection == 'Paper'){
        textBoard.textContent = 'You lose! Paper wraps up rock!';
        compTally += 1;
        winner();

    } else if(playerSelection == 'rock' && computerSelection == 'Scissors'){
        textBoard.textContent = 'You win! Rock smashes scissors!';
        playerTally += 1;
        winner();

    } else {
        textBoard.textContent = 'It\'s a tie! ';
        winner();

    }

    return playerTally, compTally;
    
});

scissors.addEventListener('click', function(){
    playerSelection = scissors.value = 'scissors';
    let computerSelection = computerPlay(compChoice);
    cScore.innerHTML = compTally;
    pScore.innerHTML = playerTally;

    if (playerSelection == 'scissors' && computerSelection == 'Rock'){
        compTally += 1;
        round += 1;
        console.log(round);
        textBoard.textContent = 'You lose! Rock smashes scissors! ';
        winner()
        

    } else if (playerSelection == 'scissors' && computerSelection == 'Paper'){
        playerTally += 1;
        round += 1;
        console.log(round);
        textBoard.textContent = 'You win! Scissors cuts up paper! ';
        winner()      
        

    } else {
        textBoard.textContent = 'It\'s a tie';
        round += 1;
        console.log(round);
        winner();
        
    }

    return playerTally, compTally;
});

paper.addEventListener('click', function(){
    playerSelection = paper.value = 'paper';
    let computerSelection = computerPlay(compChoice);
    cScore.innerHTML = compTally;
    pScore.innerHTML = playerTally;

    if (playerSelection == 'paper' && computerSelection == 'Scissors'){
        textBoard.textContent = 'You lose! Scissors cuts up paper! ';
        compTally += 1;
        winner();

    } else if (playerSelection == 'paper' && computerSelection == 'Rock'){
        textBoard.textContent = 'You win! Paper wraps up rock! ';
        playerTally += 1;
        winner();

    } else {
        textBoard.textContent = 'It\'s a tie!';
        winner();
    }

    return playerTally, compTally;

});

function winner(){
    if (playerTally === 5){
        textBoard.textContent = 'GAME OVER YOU WON!';
    
    }

    else if (compTally === 5){
        textBoard.textContent = 'GAME OVER YOU LOSE!';
    }

    else{
        return false;
    }
}

reset.addEventListener('click', function(){
    cScore.textContent = '0';
    pScore.textContent = '0';
    compTally = 0;
    playerTally = 0;
    round = 0;
    textBoard.textContent = '...';
});



