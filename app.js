let gamePlaying = true;
let compTally = 0;
let playerTally = 0;
let round = 0;
let a, CS, PS;

function compChoice(){
    let compChoices = ['Rock', 'Paper', 'Scissors'];
    return compChoices[Math.floor(Math.random() * compChoices.length)];
}


function Game(){
    if(gamePlaying){
        
        document.getElementById('rock').addEventListener('click', function(){ 
        a = document.getElementById('rock').value = 'rock';
        // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
        outcomes();
        round++;
        console.log(round);

        return a, round;
    })

        document.getElementById('scissors').addEventListener('click', function(){
            a = document.getElementById('scissors').value = 'scissors';
            // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
            outcomes();
            round++;
            console.log(round);

            return a, round;
    })

        document.getElementById('paper').addEventListener('click', function(){
            a = document.getElementById('paper').value = 'paper';
            // document.getElementById('text').innerHTML = 'Computer picked: ' + cc;
            outcomes();
            round++;
            console.log(round);

            return a, round;
    })

    
    } //gamePlaying end curly brace
    
    } 

    


function outcomes(){
    if (gamePlaying){
        let cc = compChoice();
        let b;
        if (a == 'rock' && cc == 'Paper'){
            compTally ++; 
            round++;
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - You lose!';
            
        
        } else if (a == 'rock' && cc == 'Scissors') {
            playerTally++; 
            round++;
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - You win! ';
            
    
        } else if (a == 'rock' && cc == 'Rock') {
            round++;
            b = document.getElementById('text').innerHTML = 'Computer picked: Rock - It\'s a tie!';
            
    
        } else if(a == 'scissors' && cc == 'Rock'){
            compTally ++; 
            round++;
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked Rock - You lose!';
            
        
        } else if(a == 'scissors' && cc == 'Paper') {
            playerTally++; 
            round++;
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - You win!';
            
        
        } else if (a == 'scissors' && cc == 'Scissors'){
            round++;
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - It\'s a tie!';
            
        
        } else if (a == 'paper' && cc == 'Scissors'){
            compTally ++; 
            round++;
            document.getElementById('cScore').innerHTML = compTally;
            CS = document.getElementById('cScore').value = compTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Scissors - You lose!';
            
        
        } else if (a == 'paper' && cc == 'Rock'){
            playerTally++; 
            round++;
            document.getElementById('pScore').innerHTML = playerTally;
            PS = document.getElementById('pScore').value = playerTally;
            b = document.getElementById('text').innerHTML = 'Computer picked: Rock - You win!';
            
        
        } else{
            round++;
            b = document.getElementById('text').innerHTML = 'Computer picked: Paper - It\'s a tie!';
        
        }
        
        if(round === 5){
            if(playerTally === '5'){
                document.getElementById('text').innerHTML = 'You won!';
            }

            else if(compTally === '5'){
                document.getElementById('text').innerHTML = 'you lost';
            }

            
        }
        
        
        return PS, CS, round, compTally, playerTally;
    } //gamePlaying end
    
    


}

document.getElementById('reset').addEventListener('click', reset);

function reset(){
    compTally = 0;
    playerTally = 0;
    document.getElementById('pScore').innerHTML = compTally;
    document.getElementById('cScore').innerHTML = playerTally;
    document.getElementById('text').innerHTML = '...';
    document.getElementById('rock').classList.add('fas')

}


// let winner = () => (PS > CS) ? document.getElementById('text').innerHTML = 'GAME OVER: You won!' : 'GAME OVER: You lost!';

Game();


//code for console Rock paper Scissors
// let compChoice = new Array('Rock', 'Paper', 'Scissors');

// function computerPlay(lst){
//     let randomitem = lst[Math.floor(Math.random()*lst.length)];
//     return randomitem;
// }

// let compTally = 0;
// let playerTally = 0;

// function playRound(playerSelection, computerSelection){
//     var playerSelection;
//     var computerSelection = computerPlay(compChoice);
//     let ps = playerSelection.toLowerCase();
//     console.log(playerSelection);
//     console.log(computerSelection);
    

//     if (ps == 'rock' && computerSelection == 'Paper'){
//         compTally += 1;
//         console.log ('You lose! Paper wraps up rock!');

//     } else if(ps == 'rock' && computerSelection == 'Scissors'){
//         playerTally += 1;
//         console.log ('You win! Rock smashes scissors!');

//     } else if (ps == 'rock' && computerSelection == 'Rock'){
//         console.log ('It\'s a tie! ');

//     } else if (ps == 'paper' && computerSelection == 'Scissors'){
//         compTally += 1;
//         console.log('You lose! Scissors cuts up Paper! ');

//     } else if (ps == 'paper' && computerSelection == 'Rock'){
//         playerTally +=1;
//         console.log('You win! Paper wraps up rock! ');

//     } else if (ps == 'paper' && computerSelection == 'Paper'){
//         console.log('It\'s a tie! ');

//     } else if (ps == 'scissors' && computerSelection == 'Rock'){
//         compTally += 1;
//         console.log ('You lose! Rock smashes scissors! ');

//     } else if (ps == 'scissors' && computerSelection == 'Paper'){
//         playerTally += 1;
//         console.log('You win! Scissors cuts up paper! ');

//     } else {
//         console.log('It\'s a tie');
//     }

//     return computerSelection, ps, playerTally, compTally;
    
// }




// function game(){
//     for (let i = 0; i < 5; i++){
//         let usrInput = prompt('Enter rock, paper or scissors: ');
//         playRound(usrInput, computerPlay);
//         console.log('Computer : ' + compTally, 'Player: ' + playerTally);
//     }
    
//     let x = (compTally > playerTally) ? 'Game over computer wins! ' : (compTally < playerTally) ? 'Congratulations you won! ' : 'It\'s a draw! ';
//     console.log(x);
//     return (x);
// }

// game();