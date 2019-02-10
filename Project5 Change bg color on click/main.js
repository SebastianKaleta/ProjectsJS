document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100 + y / height * 100)) / 2;

    if ((x && y) == "even") {
        document.body.style.backgroundColor = "red";
    } else if ((x && y) == "odd") {
        document.body.style.backgroundColor = "blue";
    } else if ((x || y) == "odd") {
        document.body.style.backgroundColor = "green";
    }

    console.log(x, y)
});