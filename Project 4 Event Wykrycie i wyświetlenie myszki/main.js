const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    h1.textContent = `${e.clientX}, ${e.clientY}`; //client is browser
    // h1.textContent = `${e.pageX}, ${e.pageY}`; we can use "page", and it's mean our page document, not window
    // h1.textContent = `${e.screenX}, ${e.screenY}`; this means, the entire(cały) screen our computer
})