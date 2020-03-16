
let compTally = 0;
let playerTally = 0;
let a;

function compChoice(){
    let compChoices = ['Rock', 'Paper', 'Scissors'];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
}


function playRound(){
    let cc = compChoice();
    document.getElementById('rock').addEventListener('click', function(){ 
        a = document.getElementById('rock').value = 'rock';
        document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
        outcomes();

        return a;
    })

    document.getElementById('scissors').addEventListener('click', function(){
        a = document.getElementById('scissors').value = 'scissors';
        document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
        outcomes();

        return a;
    })

    document.getElementById('paper').addEventListener('click', function(){
        a = document.getElementById('paper').value = 'paper';
        document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
        outcomes();

        return a;
    })

    
}

function outcomes(){
    let cc = compChoice();
    let b;
    if (a == 'rock' && cc == 'Paper'){
        b = document.getElementById('text').innerHTML = 'Computer picked: ' + compChoice() + ' You lose!';
        return b;
    } else if (a == 'rock' && cc == 'Scissors') {
        b = document.getElementById('text').innerHTML = 'Computer picked: ' + compChoice() + ' You win! ';
        return b;
    } else if (a == 'rock' && cc == 'Rock') {
        b = document.getElementById('text').innerHTML = 'Computer picked: ' + compChoice() + ' It\'s a tie!';
        return b;
    } else if(a == 'scissors' && cc == 'Rock'){
        b = document.getElementById('text').innerHTML = 'You lose';
        return b;   
    } else if(a == 'scissors' && cc == 'Paper') {
        b = document.getElementById('text').innerHTML = 'You win';
        return b;
    } else if (a == 'scissors' && cc == 'Scissors'){
        b = document.getElementById('text').innerHTML = 'You tie';
        return b;
    } else if (a == 'paper' && cc == 'Scissors'){
        b = document.getElementById('text').innerHTML = 'You lose';
        return b;
    } else if (a == 'paper' && cc == 'Rock'){
        b = document.getElementById('text').innerHTML = 'You win';
        return b;
    } else{
        b = document.getElementById('text').innerHTML = 'You tie';
        return b;
    }



}

playRound();