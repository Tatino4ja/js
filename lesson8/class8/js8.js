// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header


// let elementById = document.getElementById('main_header')
// elementById.classList.add('class')
// console.log(elementById)



// b) робить шириниу елементу ul 400px
// let ul400 = document.body.getElementsByTagName('ul')
// ul400[0].style.width = '400px'


// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let list = document.body.getElementsByClassName('linkList')
// for (const listElement of list) {
//     listElement.style.width = '50%'
//     listElement.style.background = 'red'
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// let elementsByClassName = document.getElementsByClassName('listElement2');
// elementsByClassName[0].innerHTML = '<p> Test</p>'

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let elements = document.body.getElementsByTagName('li');
// for (const element of elements) {
//     element.style.background = 'gray'
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// let anchor = document.body.getElementsByTagName('a');
//
// for (const anchorElement of anchor) {
//     anchorElement.classList.add('anchor')
// }
// console.log(anchor)
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let aElements = document.body.getElementsByTagName('a');
// for (const aElement of aElements) {
//     if (aElement.innerText === 'link3'){
//         aElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aElements = document.body.getElementsByTagName('a')
// for (const aElement of aElements) {
//     let innerText = aElement.innerText;
//     aElement.classList.add(`element${innerText}`)
//
// }

// console.log(aElements)
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elem = document.body.getElementsByClassName('sub-header');
// for (const elemElement of elem) {
//     elemElement.style.background = prompt('colour')
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let elementsSubHeader = document.body.getElementsByClassName('sub-header')
// console.log(elementsSubHeader)
// for (const element of elementsSubHeader) {
//     if (element.textContent === 'content 2 segment'){
//         element.style.color = prompt('colour')
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.body.getElementsByClassName('content_1');
// console.log(content1)
// content1[0].innerText = prompt('text')
// l) отримати елементи p та змінити їм padding на 20px
// let elements = document.body.getElementsByTagName('p');
// console.log(elements)
// for (const element of elements) {
//     element.style.padding = '20px'
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elements = document.body.getElementsByClassName('text2');
// console.log(elements)
// elements[0].innerText = 'dec-2021'