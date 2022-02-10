// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function p(a, b) {
//     return a * b;
// }
//     console.log(p(5, 10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function round(r){
//     return 3.14 * (r**2)
// }
// console.log(round(6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function p (h, r){
//     return 2*3.14*r*h;
// }
// console.log(p(2, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arCrea (argument){
//     for (let y of argument) {
//         console.log(y)
//     }
// }
// let x = [5, 3, 9, 'string']
// arCrea(x);
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p (par) {
//        console.log(par)
// }
// p (`lorem`);
//
// p (654321354354);

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(a)
// {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// ul (`string`)

// function ul(a){
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul (`string`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul(a, b){
//     document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul (`string`, 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [25, 'string', true, 22, 48]
// function box (arr){
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`<ul>`)
// }
// box(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , ' +
// 'та виводить їх в документ. Для кожного об'єкту окремий блок.
function dox (arr){
    for (let arrElement of arr) {
        document.write(`<div> ${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
    }

}

let array = [{id: 25, name: `Tetiana`, age: 33},
    {id: 27, name: `Roman`, age: 28},
    {id: 45, name: `Liliia`, age: 16}]
/
dox(array)


// function dox (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].id}</div>`)
//     }
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].name}</div>`)
//     }
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${arr[i].age}</div>`)
//     }
//
// }
// let array = [{id: 25, name: `Tetiana`, age: 33},
//     {id: 27, name: `Roman`, age: 28},
//     {id: 45, name: `Liliia`, age: 16}]
// dox(array)

