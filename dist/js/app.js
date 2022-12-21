let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
var maxScore = 50;
var yourScore = 0;
var botScore = 0;





rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)

function rock() {
    let hpHand = document.querySelector('.human-player-hands>img');
    hpHand.setAttribute('src', './dist/img/h-rock.svg');
    let bpHand = document.querySelector('.bot-player-hands>img');
    

    let botTurn = Math.floor(Math.random() * 3);
    if(botTurn === 0){
        bpHand.setAttribute('src', './dist/img/b-rock.svg');
        
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');
        botScore += 1;
        document.querySelector('.b-score').textContent = botScore;
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');
        yourScore += 1;
        document.querySelector('.h-score').textContent = yourScore;
    }
}

function paper() {
    let hpHand = document.querySelector('.human-player-hands>img');
    hpHand.setAttribute('src', './dist/img/h-paper.svg');
    let bpHand = document.querySelector('.bot-player-hands>img');
    let botTurn = Math.floor(Math.random() * 3);
    if(botTurn === 0){
        bpHand.setAttribute('src', './dist/img/b-rock.svg');
        yourScore += 1;
        document.querySelector('.h-score').textContent = yourScore;
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');
        botScore += 1;
        document.querySelector('.b-score').textContent = botScore;
    }

}

function scissors() {
    let hpHand = document.querySelector('.human-player-hands>img');
    hpHand.setAttribute('src', './dist/img/h-scissors.svg');
    let bpHand = document.querySelector('.bot-player-hands>img');
    let botTurn = Math.floor(Math.random() * 3);
    if(botTurn === 0){
        bpHand.setAttribute('src', './dist/img/b-rock.svg');
        botScore += 1;
        document.querySelector('.b-score').textContent = botScore;
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');
        yourScore += 1;
        document.querySelector('.h-score').textContent = yourScore;
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');
    }
}