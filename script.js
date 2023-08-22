alert("This site is optimised for use on PC💻 only.")
//  Variable Declaration
var timer=60;
var score=0;
var hit=0;

// Function Definitions
function incrScore(){
    score+=10;
    document.querySelector("#score-val").textContent=score;
}

function makeBubble(){
    var append="";
    for( var i=1;i<=1280;i++){
        append+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbtm").innerHTML=append;
}

function runTimer(){
 var timerupdate=setInterval(function(){    
  
    (timer>0) ? (timer--):(clearInterval(timerupdate),document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER 😒</h1>`);
    
    document.querySelector("#timer-value").textContent=timer;
 },1000)
}

function getNewHit(){
    hit=Math.floor(Math.random()*10);
    document.querySelector("#hit-val").textContent=hit;
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
 var clickedNum=Number(dets.target.textContent);
 if(hit===clickedNum){
    incrScore();
    getNewHit();
    makeBubble();
 }
});

// Funtion Calls
runTimer();
makeBubble();
getNewHit();
