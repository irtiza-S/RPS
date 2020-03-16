let gamePlaying = true;
let compTally = 0;
let playerTally = 0;
let a, CS, PS;

function compChoice(){
    let compChoices = ['Rock', 'Paper', 'Scissors'];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
}


function Game(){
    if(gamePlaying){
        let cc = compChoice();
        document.getElementById('rock').addEventListener('click', function(){ 
        a = document.getElementById('rock').value = 'rock';
        // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
        outcomes();

        return a;
    })

        document.getElementById('scissors').addEventListener('click', function(){
            a = document.getElementById('scissors').value = 'scissors';
            // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
            outcomes();

            return a;
    })

        document.getElementById('paper').addEventListener('click', function(){
            a = document.getElementById('paper').value = 'paper';
            // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
            outcomes();

            return a;
    })
    
    } //gamePlaying end curly brace

    
}

function outcomes(){
    if (gamePlaying){
        let cc = compChoice();
        let b;
        if (a == 'rock' && cc == 'Paper'){
            compTally ++; 
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - You lose!';
            
        
        } else if (a == 'rock' && cc == 'Scissors') {
            playerTally++; 
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - You win! ';
            
    
        } else if (a == 'rock' && cc == 'Rock') {
            b = document.getElementById('text').innerHTML = 'Computer picked: Rock - It\'s a tie!';
            
    
        } else if(a == 'scissors' && cc == 'Rock'){
            compTally ++; 
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked Rock - You lose!';
            
        
        } else if(a == 'scissors' && cc == 'Paper') {
            playerTally++; 
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - You win!';
            
        
        } else if (a == 'scissors' && cc == 'Scissors'){
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - It\'s a tie!';
            
        
        } else if (a == 'paper' && cc == 'Scissors'){
            compTally ++; 
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - You lose!';
            
        
        } else if (a == 'paper' && cc == 'Rock'){
            playerTally++; 
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Rock - You win!';
        
        
        } else{
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - It\'s a tie!';
        }
        //check for win
        
        if (CS == 5) {
            document.getElementById('text').innerHTML = 'YOU LOSE';
            
        }
    
        if (PS == 5){
            document.getElementById('text').innerHTML = 'YOU WIN';
            
        }
        return PS, CS;
    } //gamePlaying end
    
    


}

document.getElementById('reset').addEventListener('click', reset);

function reset(){
    compTally = 0;
    playerTally = 0;
    document.getElementById('pScore').innerHTML = compTally;
    document.getElementById('cScore').innerHTML = playerTally;
    document.getElementById('text').innerHTML = '...';
    // document.getElementById('rock').classList.add('fa-hand-rock');

}




Game();


