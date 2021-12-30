var minutesValue = document.getElementById("minutes");
var secondsValue = document.getElementById("seconds");
var timerRead = document.getElementById("time");
var inputMin = 0, inputSec = 0;
var stopButton = document.getElementById("stop");
var startButton = document.getElementById("start");
var counterTimeout;

function updateTimer(inputMin,inputSec) {
    var inputMinText, inputSecText;
    if (inputMin<10) {
        inputMinText = "0" + inputMin.toString();
    }else{
        inputMinText = inputMin.toString();
    }
    if(inputSec<10){
        inputSecText = "0" + inputSec.toString();
    }else{
        inputSecText = inputSec.toString();
    }
    timerRead.innerHTML = inputMinText + ":" + inputSecText;
}

minutesValue.addEventListener("change", function(){
    inputMin = minutesValue.value;
    updateTimer(inputMin,inputSec);
});

secondsValue.addEventListener("change", function(){
    inputSec = secondsValue.value;
    updateTimer(inputMin,inputSec);
});

function endTimer() {
    var beep = new Audio("audio/beep.wav");
    beep.play();
    stopTimer(inputMin,inputSec);
}

function stopTimer() {
    startButton.style.display = "flex";
    stopButton.style.display = "none";
    updateTimer(inputMin,inputSec);
    clearInterval(counterTimeout);
}

function startTimer() {
    startButton.style.display = "none";
    stopButton.style.display = "flex";
    var totalMilliSeconds = (inputMin *60*1000) + (inputSec*1000);
    var remainMilliSeconds = totalMilliSeconds;
    counterTimeout = setInterval(() => {
        if(remainMilliSeconds < 1000){
            // clearInterval(counterTimeout);
            endTimer();
        }else{
            remainMin = Math.floor(remainMilliSeconds/(60*1000));
            remainSec = remainMilliSeconds/1000 - remainMin*60;
            remainMilliSeconds -=1000;
            updateTimer(remainMin,remainSec);
        }
    }, 1000);
}