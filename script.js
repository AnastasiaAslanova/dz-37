/*Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

    поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
    Продемонструй роботу властивостей і методів.

 */

let radius = prompt(`Ввведите радиус круга`);
class Circle {
    constructor(radius) {
        // invokes the setter
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value.length < 1) {
            alert("Radius is too short.");
            return;
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    squareCircle (radius) {
        let square = Math.round(Math.PI * Math.pow(radius,2)) ;
        return square;
    }

    circumference(radius) {
        let result = Math.round(2 * Math.PI * radius);
        return  result;
    }

}
let circle = new Circle(radius);

alert(`Радиус круга равен ` + circle.radius);
alert(`Диаметр круга равен ` + circle.diameter);
alert(`Площадь круга равна `+ circle.squareCircle(radius));
alert(`Длина круга равен ` + circle.circumference(radius));

/*
 Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.
 */

class Marker {
    constructor(world, color, inkPresent) {
        this.world = world;
        this.color = color;
        this.inkPersent = inkPresent;
    }

    writeText(text) {
        let simvolText = 0.5;
        let requestInk = 0;
        let totalLeters = 0;

        for (let i = 0; i < text.length; i++ ) {
            if (text[i] === " ") {
                totalLeters+= 0;
            } else if (text [i] !== " ") {
                totalLeters += 1;
            }
        }
        console.log(`Всего букв ${this.world}, ${totalLeters}`);
        let finalRequest = totalLeters * simvolText;
        if (finalRequest <= this.inkPersent) {
            console.log(`Вы будете тратить ${finalRequest}% чернил для этой записи`);
            console.log(`У вас есть ${this.world} чернил для записи ${this.color} цветом`);
        } else {
            console.log(`У вас не хватает чернил для написания ${this.world}`);
            console.log(`Вам стоит перезаправить маркер`);
        }
    }
}

class MyMarker extends Marker {
    constructor(world, color, inkPercent, refillAmount) {
        super(world,color,inkPercent);
        this.refillAmount = refillAmount;
    }

    refill() {
        this.inkPersent += this.refillAmount;
        console.log(`Маркер заправили с ${this.refillAmount}% чернил. Текущее колличество ${this.inkPersent}%`);
    }
}
const  markerQuestion = confirm(`Вы хотите перезарязаемый маркер?`);
const world = prompt(`Напиши слово: `);
const color = prompt(`Впиши цвет маркера`);
const inkPersent = prompt(`Впиши колличество процетнов чернил`);

const standartMarker = new Marker(world, color, inkPersent);
const rechargableMarker = new MyMarker(world, color, inkPersent);

if (markerQuestion) {
    rechargableMarker.writeText(world);
} else {
    standartMarker.writeText(world);
}