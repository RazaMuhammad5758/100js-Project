const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let display = document.getElementById('display')
let timer = null;

let [hours, minutes, seconds] = [0,0,0];


    function stopWatch(){
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes = 0;
                hours++;
            }
        }
        
        let h = hours<10? '0'+hours : hours;
        let m = minutes<10? '0'+minutes : minutes;
        let s = seconds<10? '0'+seconds : seconds;
        
        display.innerHTML = h+":"+ m+":"+ s;
}
function startTime(){
    if(timer!=null){
        clearInterval(timer);
    }
     timer = setInterval(stopWatch,1000);
}

function stopTime(){
    clearInterval(timer)
}
function resetTime(){
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    display.innerHTML="00:00:00"
    
}

// what is the mistake in reset function



