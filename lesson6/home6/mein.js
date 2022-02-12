// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld = 'hello world';
// console.log(helloWorld.length)
// let lorem = 'lorem ipsum';
// console.log(lorem.length)
// let jsIsCool = 'javascript is cool';
// console.log(jsIsCool.length)
//
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld = 'hello world';
// let helloWorldUp = helloWorld.toUpperCase();
// console.log(helloWorldUp)
// let lorem = 'lorem ipsum';
// let loremUp = lorem.toUpperCase();
// console.log(loremUp)
// let jsIsCool = 'javascript is cool';
// let jsIsCoolUp = jsIsCool.toUpperCase();
// console.log(jsIsCoolUp)
//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let helloWorld = 'HELLO WORLD';
// let helloWorldLow = helloWorld.toLowerCase();
// console.log(helloWorldLow)
// let lorem = 'LOREM IPSUM';
// let loremLow = lorem.toLowerCase();
// console.log(loremLow)
//
// let jsIsCool = 'JAVASCRIPT IS COOL';
// let jsIsCoolLow = jsIsCool.toLowerCase();
// console.log(jsIsCoolLow)
//
//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let dString = ' dirty string   ';
// let string = dString.trim();
// console.log(string)
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

//
// let str = 'Каждый охотник желает знать';
// function stringToarray(arr) {
//     let y = arr.split(' ')
//     return y
// }
// stringToarray(str)
// console.log(stringToarray(str))
// document.writeln(str)


//
// let str = 'Каждый охотник желает знать';
// let stringToarray = (arr)=> {
//     let newArr = arr.split(' ')
// }
// stringToarray(str)
// document.writeln(str); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
// кількості символів.


// let string = 'Каждый охотник желает знать';
// let delete_characters = (str) => str.substring(0, 6)
// delete_characters(string)
// document.writeln(delete_characters(string))

//
// let string = 'Каждый охотник желает знать';
// let delete_characters = (str) => {
//     let p = str.substring(0, 6)
//     return p
// }
// delete_characters(string)
// console.log(delete_characters(string))
// document.write(delete_characters(string))
// //


//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// let string = 'Каждый охотник желает знать';
// let delete_characters = (str, len) =>{
//     return str.substr(0, len)
// }
// document.writeln(delete_characters(string, 7))