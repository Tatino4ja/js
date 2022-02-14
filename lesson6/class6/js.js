//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
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

// let arr = [];
// let func = (array, diap) =>{
//     let emarr = []
//     if ( Math.random())
//
// }
// func(arr)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let arr = [2, 14, 55, 7, 9, 25,44]
// arr.sort()
// console.log(arr)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let random = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray;
};
let result = random(10, 120);
console.log(result);