//CLOSURE

// const add = (start = 0) => {
//     let number = start;
//     return () => {
//         number++;
//         document.body.textContent = `aktualny stan licznika to ${number}`
//     }
// }
// const counter = add();
// document.addEventListener('click', counter)

//Sprawdzanie wieku użytkownika

// const user = (name = "", age) => {
//     let userName = name;
//     let userAge = age;

//     function showName() {
//         console.log(`Cześć ${userName}, ${userAge >=18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'}`)
//     }
//     return showName
// }

// const mieszko = user("mieszko", 20);
// const jagienka = user("jagienka", 17);
// mieszko()
// jagienka()

// ZADANIE

const counter = () => {
    let number = 0;
    return () => {
        number++;
        document.getElementsByTagName('h1')[0].textContent = `${number} sekund`;

    }

}

const counterFun = counter()
counterFun()
setInterval(counterFun, 1000)