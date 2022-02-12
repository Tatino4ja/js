// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
// let p = (a, b) => a * b;
// console.log(p(5, 10))


// - створити функцію яка обчислює та повертає площу кола

// let pr = (a) => {
//     let res = 3.14 *(a**2)
//     return res
// }
// console.log(pr(6))

// - створити функцію яка обчислює та повертає площу циліндру
// let cil = (b, c) => {
//     let res = 2 * 3.14 * b * c
//     return res
// }
// console.log(cil (4, 6))
// - створити функцію яка приймає масив та виводить кожен його елемент

// let x = [2,4,6, 10, -30]
//
// let y = (a) =>{
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i])
//     }
// }
// y(x)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let tt = 'okten'
// let p = (text)=>{
//         document.write(`<p>${text}</p>`)
//     }
// p(tt)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let t = ['hello']
// let unu = (lil) =>{
//     document.write(`<ul>`)
//     document.write(`<li>${lil}</li>`)
//     document.write(`<li>${lil}</li>`)
//     document.write(`<li>${lil}</li>`)
//     document.write(`</ul>`)
// }
// unu(t)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let unu = (a, b) => {
//     document.write(`<ul>`);
//         for (let i = 0; i < b; i++){
//             document.write(`<li>${a}</li>`)
//     }
// document.write(`</ul>`)
// }
// unu ('happy', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let array = ['five', 554, false, 68, 35]
// let spysok = (a) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < a.length; i++) {
//         document.write(`<li>${a[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// spysok(array)

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrOb = (a) => {
//     for (let aElement of a) {
//         document.write(`<div>${aElement.id} ${aElement.name} ${aElement.age}</div>`)
//
//     }
//
// }
// let array = [
//     {id: 5, name: 'Lil', age: 23},
//     {id: 60, name: 'Fil', age: 28},
//     {id: 47, name: 'Gil', age: 33}
// ]
// arrOb(array)
