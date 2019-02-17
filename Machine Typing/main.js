const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hi ;)', 'This is machine typing.', 'See you leater!']

// Parametry
let activeLetter = -15; //opóźnienie wywołania
let activeText = 0;

// Implementacja
const addLetter = () => {
    if (activeLetter >= 0) { //wywołanie z opóźnienia
        spnText.textContent += txt[activeText][activeLetter];
    }

    activeLetter++;
    if (activeLetter === txt[activeText].length) { //iteracja
        activeText++;
        if (activeText === txt.length) return; //iteracja tablicy z przerwaniem po 3 indexie[2]

        return setTimeout(() => {
            activeLetter = -15; //opóźnienie wywołania kolejnych słów
            spnText.textContent = ""; //zerowanie kontentu po 1 słowie
            addLetter(); //ponowne wywołanie funkcji dla całej tablicy
        }, 2000)

    }
    setTimeout(addLetter, 100);
}

addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);