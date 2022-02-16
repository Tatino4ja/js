//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let names = ()


// let name = (string, symbol) => {
//         let newArr = [];
//         if (string.includes(symbol)) {
//             let a = string.split(symbol)
//             a.forEach((item) => {
//                 if (item) newArr.push(item);
//             })
//             console.log(newArr.join(' '))
//         }
//     }
//     name(n3, '_');
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let ea = (zn, numb) => {
//     let ea = []
//     for (let i = 0; i < zn; i++) {
//         ea.push(Math.floor(Math.random() * numb))
//     }
//     return ea
// }
// let array = ea(10, 100)
// console.log(array)

// let array = (len, num)=>{
//     let array = []
//     for (let i = 0; i < len; i++) {
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array
// }
// let z = array(9, 8)
// console.log(z)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let arr = (len, num) => {
//     let arr = []
//     for (let i = 0; i < len; i++) {
//         arr.push(Math.floor(Math.random() * num))
//     }
//     return arr
// }
// let z = arr(10, 100)
// console.log(z)
// z.sort((y, b) => b - y)
// console.log(z)
// z.sort((a, b) => a - b)
// console.log(z)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let mas = (dov, doku) => {
//     let mas = []
//     for (let i = 0; i < dov; i++) {
//         mas.push(Math.floor(Math.random() * doku));
//     }
//     return mas.filter(numb => numb % 2 === 0)
// }
// let h = mas(10, 100)
// console.log(h)
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let mas = (dov, dosk) =>{
//     let mas = []
//     for (let i = 0; i < dov; i++) {
//        mas.push(Math.floor(Math.random()*dosk))
//
//     } return mas.map(masEll => masEll.toString())
// }
// let t = mas(10,100)
// console.log(t)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//
// let sortNums = (arr, directions) => {
//     if (directions === 'ascending') return arr.sort((a, b) => a - b)
//     if (directions === 'descending') return arr.sort((a, b) => b - a)
// }
// let nums = [11, 21, 3];
// let y = sortNums(nums, 'ascending')
// console.log(y)

// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// let y = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(y);

// -- відсортувати його за спаданням за monthDuration
//
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let y = coursesAndDurationArray.filter((course) =>{
//     return course.monthDuration>5
// })
// console.log(y)






// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(10, 120);
// console.log(result);