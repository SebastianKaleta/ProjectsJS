let red = 100;
let green = 100;
let blue = 100;
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

//38 - up
//40- down

const changeColor = (e) => {
    if (e.keyCode == "38") {
        red++;
        green++;
        blue++;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        console.log("up" + document.body.style.backgroundColor)
    } else if (e.keyCode == "40") {
        red--;
        green--;
        blue--;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
        console.log("down" + document.body.style.backgroundColor)
    }
}

window.addEventListener('keydown', changeColor);