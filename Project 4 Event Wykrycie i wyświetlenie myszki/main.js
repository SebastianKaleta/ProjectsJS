const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    h1.textContent = `${e.clientX}, ${e.clientY}`; //client is browser

    // h1.textContent = `${e.pageX}, ${e.pageY}`; we can use "page", and it's mean our page document, not window
    // h1.textContent = `${e.screenX}, ${e.screenY}`; this means, the entire(cały) screen our computer

    document.body.style.backgroundColor = `rgb(${e.clientX/3},${e.clientY/2},${e.clientX/e.clientY*20})`; //in RGB insert value from clientX and clientY (from 0 to 255 for RGB colors)

})