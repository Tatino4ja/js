// let masuv = ['klnljb', 'eeoeifo', 'ertyuio',];
// document.write('<ul>');
// for (let o of masuv) {
//     document.write(`<li>${o}</li>`);
//
// }
// document.write('</ul>')
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     {name: 'max', age: 31, status: true},
// ];
// document.write(`<ol>`)
//
// for (let user of users) {
//     if (!user.status){
//         document.write(`<li>${user.name} ${user.age}</li>`)
//     }
// }
// document.write(`</ol>`)
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let func = (a, b, c) => {
//     if (a < b && a < c){
//         return a
//     } else if ( b< a && b< c){
//         return b
//     } else {
//         return c
//     }
//
// }
//
// console.log(func(3, 2, 1))


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву

// l
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
// let array = []
//
// function scraper(startElement) {
//     console.log(startElement)
//     let children = startElement.children
//     for (const child of children) {
//         scraper(child)
//         let classList = child.classList;
//         array.push(classList)
//     }
//
// }
// scraper(document.body);
// console.log(array)

// function scraper (startElement){
//     console.log(startElement)
//     let children = startElement.children
//     for (const child of children) {
//         scraper(child)
//     }
// }
// scraper(document.body);