let size = 5;
let grow = true;


document.body.style.height = "10000px";
//create element "div" in DOM and add on end body
const slider = document.createElement('div');
document.body.appendChild(slider);
//css properties only for training JS
slider.style.backgroundColor = "green";
slider.style.top = 0;
slider.style.left = 0;
slider.style.width = "100%";
slider.style.height = size + "px";
slider.style.position = "fixed";
//fuction check event action "scroll" for window(all page what we see in frame browser), and add boolean property for variable
window.addEventListener('scroll', function changeHeight() {
    if (size >= window.innerHeight / 2) {
        grow = !grow;
    } else if (size < 0) {
        grow = !grow;

    }
    //for true and false we set value which should change for action
    if (grow) {
        size += 5;
        slider.style.backgroundColor = "green";
        slider.style.height = size + "px";
    } else {
        size -= 5;
        slider.style.backgroundColor = "red";
        slider.style.height = size + "px";
    }
    console.log(window.innerHeight); //check value innerHeight for window

});