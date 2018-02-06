const inputs = document.querySelectorAll('.controls input');
function pada(){
    const suffix = this.dataset.sizing || ""; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', pada));
inputs.forEach(input => input.addEventListener('mouseover', pada));

const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const clock = document.querySelector('.clock');

function tickTock(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegrees = (second/60)*360 + 90;
    secHand.style.transform = `rotate(${secondDegrees}deg)`;
    const minute = now.getMinutes();
    const minuteDegrees = (minute/60)*360 + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = (hour/12)*360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(tickTock, 1000);