const playerList = [
    p1 = {  
        playerName  :   document.querySelector('#p1Name'),
        score   :   0
    },
    
    p2 = {
        playerName  :   document.querySelector('#p2Name'),
        score   :   0
    },

    p3 = {
        playerName  :   document.querySelector('#p3Name'),
        score   :   0
    }
]

// const p3 = {
//     playerName  :   document.querySelector('#p2Name'),
//     score   :   0,
//     button  :   document.querySelector('#p2Button'),
//     display :   document.querySelector('#p2ScoreDisplay')
// }

const registerButton = document.querySelector('#register');
const promptSection = document.querySelector('#prompt');
const gameSection = document.querySelector('.widget');

let p1ButtonName = document.querySelector('#p1ButtonName');
let p2ButtonName = document.querySelector('#p2ButtonName');
let p1NameDisplay = document.querySelector('#p1NameDisplay');
let p2NameDisplay = document.querySelector('#p2NameDisplay');
let winnerPlayer;
let challengerPlayer;

let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let p1Display = document.querySelector('#p1ScoreDisplay');
let p2Display = document.querySelector('#p2ScoreDisplay');

const resetButton = document.querySelector('#reset');
const continueBUtton = document.querySelector('#continue');
const winningScoreVal = document.querySelector('#playto');
let winningScore = parseInt(winningScoreVal.value);
let isGameOver = false;
let isFinalRound = false;


function updateScores(player, num){
    if((player.score !== winningScore) && (!isGameOver)){
        player.score++;
        if(num === 1){p1Display.textContent = player.score}
        if(num === 2){p2Display.textContent = player.score}
        // p1Display.textContent = player.score;
        if(player.score === winningScore){
            isGameOver = true;
            if(num === 1){
                p1Display.classList.add('green'); 
                p2Display.classList.add('red'); 
            }
            if(num === 2){
                p2Display.classList.add('green'); 
                p1Display.classList.add('red'); 
            }
            p1Button.disabled = true;
            p2Button.disabled = true;
            winnerPlayer = player;
            challengerPlayer = playerList[2];
            isFinalRound = true;
        }
    }
}

function reset(){
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove(...p1Display.classList);
    p2Display.classList.remove(...p2Display.classList);
    p1Button.disabled = false;
    p2Button.disabled = false;
    for(let p of playerList){
        p.score = 0;
    }
}

p1Button.addEventListener('click', function(){
    if(!isFinalRound){
        updateScores(playerList[0], 1);
    } else {
        updateScores(winnerPlayer, 1);
    }
})

p2Button.addEventListener('click', function(){
    if(!isFinalRound){
        updateScores(playerList[1], 2);
    } else {
        updateScores(challengerPlayer, 2);
    }
})

resetButton.addEventListener('click', function(){
    reset();
    isFinalRound = false;
});

winningScoreVal.addEventListener('input', function(e){
    winningScore = parseInt(winningScoreVal.value);
    reset();
})


registerButton.addEventListener('click', function(e){
    e.preventDefault();
    promptSection.classList.toggle('hide');
    gameSection.classList.toggle('show');
    p1ButtonName.textContent = p1.playerName.value;
    p1NameDisplay.textContent = p1.playerName.value;
    p2NameDisplay.textContent = p2.playerName.value;
    p2ButtonName.textContent = p2.playerName.value;
})


continueBUtton.addEventListener('click', function(e){
    reset();
    p1ButtonName.textContent = winnerPlayer.playerName.value;
    p1NameDisplay.textContent = winnerPlayer.playerName.value;
    p2NameDisplay.textContent = challengerPlayer.playerName.value;
    p2ButtonName.textContent = challengerPlayer.playerName.value;
    continueBUtton.classList.toggle('hide');
    resetButton.classList.toggle('show');
})
