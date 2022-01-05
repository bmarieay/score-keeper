const p1 = {
    score   :   0,
    button  :   document.querySelector('#p1Button'),
    display :   document.querySelector('#p1ScoreDisplay')
}

const p2 = {
    score   :   0,
    button  :   document.querySelector('#p2Button'),
    display :   document.querySelector('#p2ScoreDisplay')
}


const resetButton = document.querySelector('#reset');
const winningScoreVal = document.querySelector('#playto');
let winningScore = parseInt(winningScoreVal.value);
let isGameOver = false;


function updateScores(player, opponent){
    if((player.score !== winningScore) && (!isGameOver)){
        player.score++;
        player.display.textContent = player.score;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('green');
            opponent.display.classList.add('red');
        }
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2Button.addEventListener('click', function(){
    updateScores(p2, p1);
})

winningScoreVal.addEventListener('input', function(e){
    winningScore = parseInt(winningScoreVal.value);
    if(winningScore <= p1Score || winningScore <= p2Score){
        isGameOver = true;
    }
    winningScore = parseInt(winningScoreVal.value);
})

resetButton.addEventListener('click', function(){
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1ScoreDisplay.classList.remove(...p1ScoreDisplay.classList);
    p2ScoreDisplay.classList.remove(...p2ScoreDisplay.classList);
})

