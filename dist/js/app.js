let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
var maxScore = 50;
var yourScore = 0;
var botScore = 0;





rockBtn.addEventListener('click', rock);
paperBtn.addEventListener('click', paper);
scissorsBtn.addEventListener('click', scissors);


function rock() {
    let hpHand = document.querySelector('.human-player-hands>img');
    hpHand.setAttribute('src', './dist/img/h-rock.svg');
    let bpHand = document.querySelector('.bot-player-hands>img');
    

    let botTurn = Math.floor(Math.random() * 3);
    if(botTurn === 0){
        bpHand.setAttribute('src', './dist/img/b-rock.svg');
        
        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');
        botScore += 1;
        document.querySelector('.b-score').textContent = botScore;
        
        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');
        yourScore += 1;
        document.querySelector('.h-score').textContent = yourScore;

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
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

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');
        botScore += 1;
        document.querySelector('.b-score').textContent = botScore;

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('pop').classList.remove("popup-rm");
        }
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

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
    } else if(botTurn === 1){
        bpHand.setAttribute('src', './dist/img/b-paper.svg');
        yourScore += 1;
        document.querySelector('.h-score').textContent = yourScore;

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
    } else {
        bpHand.setAttribute('src', './dist/img/b-scissors.svg');

        if(yourScore === 50 && yourScore > botScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: green;">You WIN!</span> 🥳'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
        if(botScore === 50 && botScore > yourScore){
            document.querySelector('.pModals>h2').innerHTML = '<span style="color: red;">You LOSE!</span> 🥲'
            document.getElementById('.pop').classList.remove("popup-rm");
        }
        
    }
}






let playAgainBtn = document.getElementById('play-again');

playAgainBtn.addEventListener('click', playAgain);

function playAgain() {
    document.querySelector('.popup').classList.add("popup-rm")
    yourScore *= 0;
    botScore *= 0;
    document.querySelector('.h-score').textContent = yourScore;
    document.querySelector('.b-score').textContent = botScore;
}