const endTime = new Date('2019-02-25 23:34:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(() => {
        const nowTime = new Date().getTime();
        // const time = Math.floor((endTime - nowTime) / 1000);

        const time = endTime - nowTime;
        // const days = endTime / (1000 * 60 * 60 * 24);//ilość dni od 1.1.1970 do endTime
        const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24))); //ilość dni od obecnej daty do endTime

        const hours = Math.floor(((endTime / (1000 * 60 * 60)) - (nowTime / (1000 * 60 * 60))) % 24);

        const minutes = Math.floor(((endTime / (1000 * 60)) - (nowTime / (1000 * 60))) % 60);


        const seconds = Math.floor(
            ((endTime / 1000) - (nowTime / 1000)) % 60
        );


        spanD.textContent = days;
        spanH.textContent = hours;
        spanM.textContent = minutes;
        spanS.textContent = seconds;
    },
    1000)