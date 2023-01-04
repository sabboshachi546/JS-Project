var seconds = document.getElementById('seconds');
var miliseconds = document.getElementById('miliseconds');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var sec = 0;
var millisec = 0;
var timeInterval;

const timer =()=>{
    millisec++;
    if(millisec<9){
        miliseconds.innerHTML = "0" + millisec;
    }
    if(millisec>9){
        miliseconds.innerHTML = millisec;
    }
    if(millisec>99){
        sec++;
        seconds.innerHTML = sec;
        millisec = 0;
        miliseconds.innerHTML ="0" + 0;
    }
    if(sec>9){
        seconds.innerHTML = sec;
    }
}
start.addEventListener('click',()=>{
    timeInterval = setInterval(timer,10)
})
stop.addEventListener('click', ()=>{
    clearInterval(timeInterval)
});
reset.addEventListener('click',()=>{
   clearInterval(timeInterval);
   sec ="00";
   millisec = "00";
   seconds.innerHTML = sec;
   miliseconds.innerHTML = millisec;
   console.log(seconds)
})