const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');

let hourDeg;
let minuteDeg;
let secondDeg;
let meridiem;
let hour;

function timeToDeg() {
    const date = new Date();

    hour = date.getHours();
    minute = date.getMinutes();
    minuteDeg = date.getMinutes() * 6;
    secondDeg = date.getSeconds() * 6;

    hour = hour > 12 ? hour - 12 : hour;

    meridiem = hour > 12 ? 'PM' - 12 : 'AM';

    hourDeg = ( hour * 30 ) + ( minute * .5 );

    rotate();
    setTime();
}
timeToDeg();
setInterval(timeToDeg,1000);

function rotate() {

hourHand.style.transform = `rotate(${hourDeg}deg)`;
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
secondHand.style.transform = `rotate(${secondDeg}deg)`;

}

function setTime() {
    hour = hour.toString();
    hour = hour < 10 ? '0' + hour : hour;

    time.value = `${hour}:${minute}`;
}
console.log( `${hour}:${minute}`);