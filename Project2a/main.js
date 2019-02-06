document.body.style.height = 10000 + "px";
let size = 5;
let grow = true;
const slider = document.createElement('div');
document.body.appendChild(slider);
slider.style.backgroundColor = "green";
slider.style.width = "100%";
slider.style.height = size + "px";
slider.style.position = "fixed";

window.addEventListener('scroll', function changeHeight() {
    if (size >= window.innerHeight / 2) {
        grow = !grow;
    } else if (size < 0) {
        grow = !grow;

    }

    if (grow) {
        size += 5;
        slider.style.backgroundColor = "green";
        slider.style.height = size + "px";
    } else {
        size -= 5;
        slider.style.backgroundColor = "red";
        slider.style.height = size + "px";
    }
    console.log(window.innerHeight);

});