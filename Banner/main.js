const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

//Interfejs

const time = 5000; //5s
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active')); //wyszukujemy index elementu tablicy dots, który zawiera klasę active
    dots[activeDot].classList.remove('active'); //odwołujemy sie do indeksu tablicy i usuwamy klase active
    dots[active].classList.add('active'); //następnie do kolejnego indexu funkcji changeSlide, dopisanego do tablicy dots, dodajemy klasę active
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();

}
let indexInterval = setInterval(changeSlide, time);
const keyChangeSlide = (e) => {
    e = e || window.event;
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
}


window.addEventListener('keydown', keyChangeSlide)