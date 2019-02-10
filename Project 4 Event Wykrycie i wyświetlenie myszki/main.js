const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {

    //________________________________________________________________________

    //h1.textContent = `${e.clientX}, ${e.clientY}`; client is browser

    // h1.textContent = `${e.pageX}, ${e.pageY}`; we can use "page", and it's mean our page document, not window
    // h1.textContent = `${e.screenX}, ${e.screenY}`; this means, the entire(cały) screen our computer

    // document.body.style.backgroundColor = `rgb(${e.clientX/3},${e.clientY/2},${e.clientX/e.clientY*20})`; //in RGB insert value from clientX and clientY (from 0 to 255 for RGB colors)
    //________________________________________________________________________

    //OPTIMIZATION TO UNIVERSAL CODE

    const x = e.clientX + 1; //becouse show value 244 from 255 color value
    const y = e.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = `${x}, ${y}`; //client is browser

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100 + y / height * 100)) / 2;


    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;

})