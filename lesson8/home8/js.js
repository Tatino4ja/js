//     - Напишіть код,  котрий :
// // -- отримує текст з параграфа з id "content"
// let element = document.getElementById('content');
// console.log(element)

// // -- отримує текст з блоку з id "rules"
// let byId = document.getElementById('rules');
// console.log(byId)
// // // -- замініть текст параграфа з id 'content' на будь-який інший
// let content = document.getElementById('content');
// console.log(content)
// content.innerHTML = '<p>InnerHTML</p>'
// //
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let element = document.getElementById('rules');
// element.innerText = 'Inner text'
//

// // -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// console.log(children)
// for (const child of children) {
//     child.style.background = 'red'
// }

// -- змініть кожному елементу колір тексту на синій

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = 'blue'
// }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let element = document.getElementById('rules');
// console.log(element.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let element = document.body.getElementsByClassName('fc_rules');
// console.log(element)
// for (const el of element) {
//     el.style.color = 'red'
// }

// function scrapper (startElement){
//     console.log(startElement)
//     let children = startElement.children
//     for (const child of children) {
//         scrapper (child)
//     }
// }
// scrapper(document.body)
