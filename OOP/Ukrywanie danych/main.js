class Cat {
    constructor() {
        this._color = color;
    }
    //metoda pobierająca zawartość _color
    getColor() {
        return this._color;
    }
    setColor(value) {
        if (typeof value === "string") {
            return this._color = value;
        } else {
            console.log('wartość nieprawidłowa')
        }
    }
}

const kotek = new Cat('czarny')
kotek.color


// 2 - Wykorzystanie Domknięć
// przykład 1
class Dog {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.getColor = () => color;
        this.setColor = (color) => _color = color;
    }
}

const fafik = new Dog('fafik', 'brązowy')

// przykład 2

class Car {
    constructor(name, counter = 100000, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        this.getYear = () => _year;

        this.setCounter = function (value) {
            _changeNumber++;
            return _counter = value;
        }
        this.getCounter = function () {
            if (_changeNumber) alert(`Uważaj licznik zmieniony ${_changeNumber}`)
            return _counter
        }
        this.showCarAge=function(year){
            return year - _year;
        }
    }
}

const polonez = new Car('polonez caro', 25000, 2009)