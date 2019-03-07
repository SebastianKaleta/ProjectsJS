// 'use strict'
// // THIS

// this //obiektu globalnego

// const fn=function(){
//     console.log(this.name)
// }

// // fn()

// const obj ={
//     name:"adam",
//     showName:fn
// }

// // obj.fn()

// const fun=fn;

// // fun()
// // obj.showName()

// document.addEventListener('click',function(){
//     console.log(this);
//     const inside = function(){
//         console.log(this)
//     }
// })

function showName() {
    console.log(this.name);
}

const karol = {
    name: 'karol',
    showName: showName
}

const tatiana = {
    name: 'tatiana',
    showName: showName
}

function one() {
    this.name = "pierwsza";
    return this.name;
}

// one()

const object1 = {
    two: one,
    four: function () {
        console.log(this)
    }
}

// object1.two()

const three = object1.two;

const five = object1.four;

five()

// three();