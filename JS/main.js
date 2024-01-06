const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');

/*
How to change time :
    -> Click the arrow button for stop the clock.
    -> Change the time as you want.
    -> Click the arrow button again to run the clock;
Reset :
    -> Click the reset button for real time;
*/

let hourDeg;
let minuteDeg;
let secondDeg;
let second = 0;
let hour;
let user = false;
let increaseUserTime;
let clicked = false;
let stop = true;
let timeArray = [];

timeToDeg();
let interval = setInterval(timeToDeg, 1000);

function timeToDeg() {
     const date = new Date();

    hour = date.getHours();
    minute = date.getMinutes();
    minuteDeg = date.getMinutes() * 6;
    secondDeg = date.getSeconds() * 6;

    hour = hour > 12 ? hour - 12 : hour;

    hourDeg = ( hour * 30 ) + ( minute * .5 );

    rotate();
    setTime();
}

function getTime() {
    let userTime = time.value;    
    timeArray = userTime.split(':');
    console.log(timeArray)
}

console.log(getTime()+timeArray)

function setClock() {
    second = 0;
    hour = hour > 12 ? hour - 12 : hour;
    hour = timeArray[0];
    hour = hour.toString();
    hour = hour < 10 ? '0' + hour : hour;
    hour = parseInt(hour);

    minute = minute.toString();
    minute =  minute < 10 ? '0' + minute : minute;
    minute = parseInt(timeArray[1]);

    console.log(typeof(hour))
}

function runClock() {
    hourDeg = ( hour * 30 ) + ( minute * .5 );
    minuteDeg = minute * 6;
    secondDeg = second * 6;
}

function increaseTime() {
    second = second + 1;
    if(second == 60){
        second = 0;
        minute = minute + 1;
    }

    if(minute == 60){
        minute = 0;
        hour = hour + 1;
    }

    if(hour == 13){
        hour = 1;
    }

    console.log(hour,minute,second)

    runClock();
    rotate();
    setTime();
}

submit.addEventListener('click',() => {
    clearInterval(interval);
    stop = !stop;
    user = true;
console.log(stop)
    if(stop){
            getTime();
            setClock();
            clearInterval(increaseUserTime);
            increaseUserTime = setInterval(increaseTime, 1000);
    }
    else {
    clearInterval(increaseUserTime);
    }
});

reset.addEventListener('click', () => {
    timeToDeg();
    interval = setInterval(timeToDeg, 1000);
    clearInterval(increaseUserTime);
    user = false;
});

function rotate() {
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function setTime() {
    if(!user) {
        hour = hour.toString();
        hour = hour < 10 ? '0' + hour : hour;
        minute =  minute < 10 ? '0' + minute.toString() : minute;
    }
    time.value = `${hour}:${minute}`;
}