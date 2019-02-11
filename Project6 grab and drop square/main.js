const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "gray";
    drawActive = !drawActive;

    insertDivX = e.offsetX; //area inside div
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {


        divX = e.clientX - insertDivX; //clientX position on page
        divY = e.clientY - insertDivY; //subtrack position mouse in div, from position in body
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    drawActive = !drawActive;
})