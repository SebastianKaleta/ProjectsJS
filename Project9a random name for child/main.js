const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Amelia", "Wanda", "Grażyna"];

const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien", "Moim zdaniem, uważam"]


const nameGenerator = () => {

    // FIRST SOLUTION 

    // const indexNames = Math.floor(Math.random() * names.length);
    // const indexPrefixs = Math.floor(Math.random() * prefixs.length);
    // div.textContent = `${prefixs[indexPrefixs]}, że najlepsze będzie imię ${names[indexNames]}`;


    // SECOND SOLUTION

    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[ Math.floor(Math.random() * names.length)]}`;

}


btn.addEventListener('click', nameGenerator)