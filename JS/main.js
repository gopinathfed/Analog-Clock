const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

let hourDeg;
let minuteDeg;
let secondDeg;

function timeToDeg() {
    const date = new Date();

    let hour = date.getHours();
    minute = date.getMinutes();
    minuteDeg = date.getMinutes() * 6;
    secondDeg = date.getSeconds() * 6;

    hour = hour > 12 ? hour - 12 : hour;

    hourDeg = ( hour * 30 ) + ( minute * .5 );

    rotate();
}
timeToDeg();
setInterval(timeToDeg,1000);

function rotate() {

hourHand.style.transform = `rotate(${hourDeg}deg)`;
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
secondHand.style.transform = `rotate(${secondDeg}deg)`;

}