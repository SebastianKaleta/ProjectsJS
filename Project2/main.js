const squere = document.createElement('div');
document.body.appendChild(squere);
let grow = true;
let size = 100; //size squere

squere.style.width = size + 'px';
squere.style.height = size + 'px';

//max size squere
// window.innerWidth*0.5

window.addEventListener('scroll', function () {

    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size == 100) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    } else {
        size -= 5;
        squere.style.width = size + "px";
        squere.style.height = size + "px";
    }


    console.log(size);
})