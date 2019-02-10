document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if ((x % 2 === 0) && (y % 2 === 0)) {
        document.body.style.backgroundColor = `red`;
    } else if ((x % 2 === 1) && (y % 2 === 1)) {
        document.body.style.backgroundColor = `blue`;
    } else if ((x % 2 === 1) || (y % 2 === 1)) {
        document.body.style.backgroundColor = `green`;
    }

    console.log(x, y)
    //__________________________________________________
    //ANOTHER SOLUTION
    // const color = getColor(event);
    // document.body.style.backgroundColor = color;
});

const getColor = (e) => {
    if ((x % 2 === 0) && (y % 2 === 0)) {
        return "red";
    } else if ((x % 2 === 1) && (y % 2 === 1)) {
        return "blue";
    } else if ((x % 2 === 1) || (y % 2 === 1)) {
        return "green"
    }
}
// ___________________________________________________