/* scripts del contador */
const dayEle = document.getElementById("day");
const hourEle = document.getElementById("hour");
const minuteEle = document.getElementById("minute");
const secondEle = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountDown();

function updateCountDown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayGap = Math.floor(gap / day);
    const hourGap = Math.floor((gap % day) / hour);
    const minuteGap = Math.floor((gap % hour) / minute);
    const secondGap = Math.floor((gap % minute) / second);

    dayEle.innerText = dayGap;
    hourEle.innerText = hourGap;
    minuteEle.innerText = minuteGap;
    secondEle.innerText = secondGap;

    setTimeout(updateCountDown, 1000);

}

