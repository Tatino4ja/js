// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
//
// let array1 = [2, 5, 14, 76, 27]
// for (let number of array1) {
//     console.log(number)
// }
//
//
//
// let array2 = ['one', 'two', 'three', 'four', 'five']
// for (let string of array2) {
//     console.log(string)
// }
//
// let array = ['hello', 2022, true, false, '28']
// for (let arrayElement of array) {
//     console.log(arrayElement)
// }
//
// let array3 = [
//     {
//         product: 'apple', masa: 300, najavnist: true
//     },
//     {
//         product: 'bread', masa: 450, najavnist: false
//     },
//     {
//         product: 'lemon', masa: 600, najavnist: false
//     },
//     {
//         product: 'kivi', masa: 50, najavnist: true
//     },
//     {
//         product: 'melon', masa: 900, najavnist: false
//     },
//
// ]
// for (let array3Element of array3) {
//     console.log(array3Element)
// }
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль
// let array = []
// array [0] = 'happy';
// array [1] = 'birthday';
// array [2] = 'to';
// array [3] = 'you';
// console.log(array)
// document.write(array)
// // //

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// 
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>name</div>`)
//
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} name</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//    document.write(`<h1>Name</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<20){
//     document.write(`<h1>Name ${i}</h1>`)
//     i++
// }
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [1, 5, 69, 53, 48, 25, 58, 4, 23, 20];
// for (let number of array) {
//     console.log(number)
//
// }
// let array = [1, 5, 69, 53, 48, 25, 58, 4, 23, 20];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

// }
// let array = [1, 5, 69, 53, 48, 25, 58, 4, 23, 20];
// let i = 0
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['asd', 'lkj', 'sfdca', '2553', 'ffn','asd', 'lkj', 'sfdca', '2553', 'ffn',]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//
// }
// let arr = ['asd', 'lkj', 'sfdca', '2553', 'ffn','asd', 'lkj', 'sfdca', '2553', 'ffn',]
// for (let string of arr) {
//     console.log(string)
//
// }
// let arr = ['asd', 'lkj', 'sfdca', '2553', 'ffn','asd', 'lkj', 'sfdca', '2553', 'ffn',]
// i=0
// while (i<arr.length){
//     console.log(arr[i])
//     i++
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let masyv = ['kjhk', 25, true,'lkj', 'sfdca', '2553', 53, 48, 25, 58 ];
// for (let masyvElement of masyv) {
//     console.log(masyvElement)
//
// }
// let masyv = ['kjhk', 25, true,'lkj', 'sfdca', '2553', 53, 48, 25, 58 ];
// i=0
// while (i<masyv.length){
//     console.log(masyv[i])
//     i++
// // }
// let mas = ['kjhk', 25, true,'lkj', 'sfdca', '2553', 53, 48, 25, 58 ];
// for (let i = 0; i < mas.length; i++) {
//    console.log(mas[i])
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = ['kjhk', 25, true,'lkj', 'sfdca', '2553', 53, false, 25, 58];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean"){
//         console.log(array[i])
//     }
//
// }


// пробувала робити ще отак, але чогось не виходить


// let array = ['kjhk', 25, true, 'lkj', 'sfdca', '2553', 53, false, 25, 58];
// i = 0
// while (i < array.length){
//     if (typeof array [i] === "boolean"){
//         console.log(array[i])
//         i++
// }
// }
// let array = ['kjhk', 25, true, 'lkj', 'sfdca', '2553', 53, false, 25, 58];
// for (let arrayElement of array) {
//     if (typeof arrayElement === "boolean"){
//         console.log(arrayElement)
//     }
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = ['kjhk', 25, true, 'lkj', 'sfdca', '2553', 53, false, 25, 58];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number"){
//         console.log(array[i])
//     }
//
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = ['kjhk', 25, true, 'lkj', 'sfdca', '2553', 53, false, 25, 58];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string"){
//         console.log(array[i])
//     }
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних
// індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 'string';
// array[1] = true;
// array [2] = 528;
// array [3] = 356;
// array [4] = 'lkjh'
// array [5] = 875;
// array [6] = false;
// array [7] = true;
// array [8] = 'spring';
// array [9] = 852;
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та
// document.write
//
// for (let i = 0; i < 10; i++) {
//    console.log('step'+i);
//    document.write('step'+i)
//
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('step' + i)
//     document.write('step' +i)
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та
// document.write
// /
//
// for (let i = 0; i < 100; i+=2) {
//     console.log('step' + i)
//     document.write('step' +i)
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i ++) {
//     if (i % 2 === 0){
//         console.log('step' + i)
//     document.write('step' + i)
// }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0){
//         console.log('step' + i)
//     document.write('step' + i)
// }
// }