let compChoice = new Array('Rock', 'Paper', 'Scissors');

function computerPlay(lst){
    let randomitem = lst[Math.floor(Math.random()*lst.length)];
    return randomitem;
}


let compTally = 0;
let playerTally = 0;

function playRound(playerSelection, computerSelection){
    var playerSelection;
    var computerSelection = computerPlay(compChoice);
    let ps = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    

    if (ps == 'rock' && computerSelection == 'Paper'){
        compTally += 1;
        console.log ('You lose! Paper wraps up rock!');

    } else if(ps == 'rock' && computerSelection == 'Scissors'){
        playerTally += 1;
        console.log ('You win! Rock smashes scissors!');

    } else if (ps == 'rock' && computerSelection == 'Rock'){
        console.log ('It\'s a tie! ');

    } else if (ps == 'paper' && computerSelection == 'Scissors'){
        compTally += 1;
        console.log('You lose! Scissors cuts up Paper! ');

    } else if (ps == 'paper' && computerSelection == 'Rock'){
        playerTally +=1;
        console.log('You win! Paper wraps up rock! ');

    } else if (ps == 'paper' && computerSelection == 'Paper'){
        console.log('It\'s a tie! ');

    } else if (ps == 'scissors' && computerSelection == 'Rock'){
        compTally += 1;
        console.log ('You lose! Rock smashes scissors! ');

    } else if (ps == 'scissors' && computerSelection == 'Paper'){
        playerTally += 1;
        console.log('You win! Scissors cuts up paper! ');

    } else {
        console.log('It\'s a tie');
    }

    return computerSelection, ps, playerTally, compTally;
    
}




function game(){
    for (let i = 0; i < 5; i++){
        let usrInput = prompt('Enter rock, paper or scissors: ');
        playRound(usrInput, computerPlay);
        console.log('Computer : ' + compTally, 'Player: ' + playerTally);
    }
    
    let x = (compTally > playerTally) ? 'Game over computer wins! ' : (compTally < playerTally) ? 'Congratulations you won! ' : 'It\'s a draw! ';
    console.log(x);
    return (x);
}

game();




