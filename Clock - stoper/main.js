const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');

const stoper = document.querySelector('.time div');
let time = 0;
let active = false;
let interval;

const start = () => {
    time++;
    stoper.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    stoper.textContent = "---"
    active = false;
    btnStart.textContent = "Start";
    clearInterval(interval);
}


const count = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        interval = setInterval(start, 10)
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(interval);
    }
}

btnReset.addEventListener('click', reset)
btnStart.addEventListener('click', count)