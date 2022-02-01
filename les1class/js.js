// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let mas10 = [ 3, 4, 9, 5, 2, 6, 7, 58, 21, 6]
let result = mas10 [0]+ mas10 [1] + mas10 [2] + mas10 [3]+ mas10 [4] + mas10 [5] + mas10 [6] + mas10 [7] + mas10 [8] + mas10 [9]
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'book',
    numberOfPages: 250,
    zanr: 'zhanr',
}
console.log(book)


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = PI * (Math.pow ((dC/2), 2)) * heightC
// let v = PI * ((dC/2) ** 2) * heightC
console.log(v)


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
// let k = ((n**2)+(m**2))**(1/2);
let k = Math.sqrt (Math.pow( n, 2) + Math.pow( m, 2));
console.log(k)

