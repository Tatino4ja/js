// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     }
// else
// if (b < a && b < c) {
//     console.log(b)
// } else{
//     console.log(a)
// }
// }
//
// min(9, 5, 6)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max (a, b, c){
//     if (a>b && a>c){
//         console.log(a)
//     }
//     else if (b>a && b>c){
//         console.log(b)
//     } else{
//         console.log(c)
//     }
// }
// max(9, 3, 5)

// створити функцію яка повертає найбільше число з масиву

//
// function max(numb) {
//
//
//     for (let numbElement of numb){
//
//     }
//     console.log(numbElement)
// }
//
// let arr = [9, 5, 44, 0]
// max(arr)
// // console.log(a)
// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [9, 5, 44, 5, 27]
//
// function plus(suma) {
//     let a = 0
//     for (let sumaElement of suma) {
//         a = sumaElement + a
//     }
//     return a
// }
// console.log(plus(arr))
// plus(arr)

// / - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [9, 5, 44, 5, 27]
//
// function ser(sa) {
//     let a = 0
//     for (let saElement of sa) {
//         a = saElement + a
//         {
//             a = a / sa.length
//             return a
//         }
//     }
// }
//
// ser(arr)
// console.log(ser(arr))



// створити функцію яка приймає будь-яку кількість чисел,
//     повертає найменьше, а виводить найбільше (Math використовувати заборонено)
// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = []
// function random (run){
//     let array = []
//     for (let i = 0; i < run; i++) {
//       array.push(Math.round(Math.random()*100))
//     }
//     return array
// }
// console.log (random(15))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].