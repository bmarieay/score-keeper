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
            player.button.disabled = true;
            opponent.display.classList.add('red');
            opponent.button.disabled = true;
        }
    }
}

function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.display.textContent = 0;
        p.score = 0;
        p.display.classList.remove(...p.display.classList);
        p.button.disabled = false;
    }
}

p1Button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2Button.addEventListener('click', function(){
    updateScores(p2, p1);
})

resetButton.addEventListener('click', reset);

winningScoreVal.addEventListener('input', function(e){
    winningScore = parseInt(winningScoreVal.value);
    reset();
})


