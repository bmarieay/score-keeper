//buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
//scores
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
//score updates
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 3;
let isDone = false;

//events
p1Button.addEventListener('click', function(){  
     
    let playerOneDisplay = p1Score.innerText;
    if((playerOneDisplay < winningScore) && !isDone){
        p1Score.innerText = updateScore(playerOneScore, p1Score.innerText);
        alert(playerOneScore)
    }
    if(p1Score.innerText === winningScore){
        console.log('done')
        isDone = true;
    }
})

p2Button.addEventListener('click', function(){   
    let playerTwoDisplay = p2Score.innerText;
    if((playerTwoDisplay < winningScore)  && !isDone){
        p2Score.innerText = updateScore(playerTwoScore, p2Score.innerText);
    }
    if(p2Score.innerText === winningScore){
        alert('done')
        isDone = true;
    }
})

function updateScore(playerScore, scoreUpdate){
    console.log(`in function ${scoreUpdate}`)
    playerScore = scoreUpdate;
    playerScore++;

    scoreUpdate = playerScore;
    return scoreUpdate;
}

resetButton.addEventListener('click', function(){
    p1Score.innerText = 0;
    p2Score.innerText = 0;
})
