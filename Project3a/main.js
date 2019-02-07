// tutaj rozwiązanie


const btn = document.querySelector('button');
let size = 16;
let click = 0;
let list = [...document.querySelectorAll('li')];
// list = document.querySelector('li');

btn.addEventListener('click', function () {
    click++;
    //for loop
    // for (let i = 0; i < list.length; i++) {
    //     list[i].style.display = "block";
    //     console.log(list[i]);
    //     if (click >= 2) {
    //         list[i].style.fontSize = size + "px";
    //     }


    //     //forEach loop
    //     list.forEach(function (list) {
    //         list.style.display = "block";
    //         if (click >= 2) {
    //             list.style.fontSize = size + "px";
    //         }
    //     });

    //     size++; //iteration outside of loop, becouse inside iterating every li separately
    // });



    //another way
    btn.addEventListener('click', () => {
        for (let i = 0; i < list.length; i++) {
            list[i].style.display = "block";

            if (click >= 2) {
                list[i].style.fontSize = `${size}px`;
            }
        }
        size++;
    });
});