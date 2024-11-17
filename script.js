var timer = 60;
var score = 0;
var hitrn;

function makeBubble(){
    var clutter = "";

for(var i = 1 ; i<=200 ; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div>`
}

document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".elem2").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = "";
            document.querySelector(".pbtm").innerHTML = `<h1>GameOver<br>Your Score is: ${score}</h1>`
        }
    },1000);    
}

function hitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".elem").textContent = hitrn;
}

function scoreval(){
    score += 10;
    document.querySelector(".elem3").textContent = score;
}

document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var num  = Number(dets.target.textContent);
    if(hitrn === num){
        scoreval();
        hitval();
        makeBubble();
    }
});
hitval();
makeBubble();
runTimer();
