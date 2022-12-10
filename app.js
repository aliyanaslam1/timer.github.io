var min = 10
var sec = 60
var MiliSecond = 60
var Hour = 60
var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMiliSecond = document.getElementById("displayMiliSecond")
var displayHour = document.getElementById("displayHour")

var interval;

function timer(){
    MiliSecond--;
    if(MiliSecond == 0){
        MiliSecond = 10;
        sec--;
        if (sec == 0) {
            sec = 00;
            alert("time up")
            resetTimer()
            min--
            if (min == 0) {
                min = 0;
                Hour--
            }
        }
    }
    displayMiliSecond.innerHTML = MiliSecond
    displayMin.innerHTML = min
    displaySec.innerHTML = sec
    displayHour.innerHTML = Hour

    
}

function startTimer(){
    interval = setInterval(function () {
    timer()},0.1)
}
function pauseTimer (){
    clearInterval(interval)
}
function resetTimer(){
    pauseTimer()
    min = 0
    sec = 0
    MiliSecond = 0
    Hour = 0
    displayMiliSecond.innerHTML = MiliSecond
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
    displayHour.innerHTML = Hour
}