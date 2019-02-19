// http://websamuraj.pl/examples/js/projekt11/

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
    stoper.textContent = "---"
    clearInterval(interval);
    btnStart.textContent = "Start";
    active = active;
    console.log("reset" + active)
}


const count = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        interval = setInterval(start, 10)
        console.log("pauza" + active)
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(interval);
        console.log("start" + active)
    }
}

btnReset.addEventListener('click', reset)
btnStart.addEventListener('click', count)