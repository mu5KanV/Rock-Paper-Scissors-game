let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

displayScore();

function displayScore(){
    document.querySelector(".js-score")
        .innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let isAutoPlaying=false;
let intervalID;

function autoPlay(){
    console.log("I'm getting executed");
    // if(!isAutoPlay){
    //     intervalId=setInterval(function(){
    //         let myMove=computerPick();
    //         playGame(myMove);
    //     },1000);

    //     isAutoPlay=true;
    // }else{
    //     clearInterval(intervalId);
    //     isAutoPlay=false;
    // }
    if(!isAutoPlaying){
        intervalID=setInterval(function(){
            let Move=pickComputerMove();
            playGame(Move);
        },1000);
        isAutoPlaying=true;
    }else{
        clearInterval(intervalID);
        isAutoPlaying=false;
    }
}

function toggleAutoPlayBtn(){
    if(document.querySelector(".auto-play-btn").innerText==="Auto Play"){
        document.querySelector(".auto-play-btn").innerText="Stop Playing"
    }else{
        document.querySelector(".auto-play-btn").innerText="Auto Play"
    }
}

function playGame(myPick){
    var myPick=myPick;
    var computerPick= pickComputerMove();
    var result='';

    //for when user's move is rock 
    if(myPick==='rock'){
        if(computerPick==='rock'){
            result='Tie';
            score.ties++;
        }else if(computerPick==='scissors'){
            result='You Win';
            score.wins++;
        }else{
            result='You Lose';
            score.losses++;
        }
    }

    //for when user's move is paper
    if(myPick==='paper'){
        if(computerPick==='paper'){
            result='Tie';
            score.ties++;
        }else if(computerPick==='rock'){
            result='You Win';
            score.wins++;
        }else{
            result='You Lose';
            score.losses++;
        }
    }

    //for when user's move is scissors
    if(myPick==='scissors'){
        if(computerPick==='scissors'){
            result='Tie';
            score.ties++;
        }else if(computerPick==='paper'){
            result='You Win';
            score.wins++;
        }else{
            result='You Lose';
            score.losses++;
        }
    }
    

    displayScore();

    document.querySelector(".js-result")
        .innerHTML=`${result}`;

    document.querySelector(".js-moves")
        .innerHTML=`You <img src="images/${myPick}.png" alt="" class="moves-played"> <img src="images/${computerPick}.png" alt="" class="moves-played">Computer`

    localStorage.setItem('score', JSON.stringify(score));    
}

function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    displayScore();

    localStorage.setItem('score', JSON.stringify(score));
}

function pickComputerMove(){
    var randNumber= Math.random();
    var move;
    if(randNumber>=0 && randNumber<1/3){
        move='rock';
    }else if(randNumber>=1/3 && randNumber<2/3){
        move='paper';
    }else{
        move='scissors';
    }
    return move;
}