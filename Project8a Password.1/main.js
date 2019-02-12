const input = document.getElementById('pass');

const div = document.querySelector('div');
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];


//FIRST
//___________________________
// const showMessage = (e) => {
// passwords.forEach((item, i) => {
//     if (item.toLowerCase() === e.target.value.toLowerCase()) {
//         document.querySelector('div').textContent = messages[i];

//     }

// })
// }


//SECOND
//___________________________

// passwords.forEach((password, index) => {
//     passwords[index] = password.toLowerCase();
// })

// const showMessage = (e) => {
//     const input = e.target.value.toLowerCase();
//     passwords.forEach((item, i) => {
//         if (item === input) {
//             document.querySelector('div').textContent = messages[i];

//         }

//     })
// }



//THIRD
//___________________________


const LCPasswords = passwords.map(password => password.toLowerCase())

const showMessage = (e) => {
    const textInput = e.target.value;

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            div.textContent = messages[i];
        }
    }


}




input.addEventListener("input", showMessage);