const input = document.getElementById('pass');

const div = document.querySelector('div');
const passwords = ["user", "wiosna"];
const messages = ["Wyjechałam na zawsze", "Piękna pora roku"];

input.addEventListener('input', (e) => {
    div.textContent = "";
    // console.log(e.target.value);
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    });



    input.addEventListener('focus', (e) => {
        e.target.classList.add('active');
    });
    input.addEventListener('blur', (e) => {
        e.target.classList.remove('active');
    });

});