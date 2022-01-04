const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');

const winningScoreVal = document.querySelector('#winning-score');

let winningScore = parseInt(winningScoreVal.value);
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', function(){
    if((p1Score !== winningScore) && (!isGameOver)){
        p1Score++;
        p1ScoreDisplay.textContent = p1Score;
        if(p1Score === winningScore){
            isGameOver = true;
            p1ScoreDisplay.classList.add('green');
            p2ScoreDisplay.classList.add('red');
        }
    }
})
    
p2Button.addEventListener('click', function(){
    if((p2Score !== winningScore) && (!isGameOver)){
        p2Score++;
        p2ScoreDisplay.textContent = p2Score;
        if(p2Score === winningScore){
            isGameOver = true;
            p1ScoreDisplay.classList.add('red');
            p2ScoreDisplay.classList.add('green');
        }
    }
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