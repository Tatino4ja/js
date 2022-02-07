// let masuv = ['klnljb', 'eeoeifo', 'ertyuio',];
// document.write('<ul>');
// for (let o of masuv) {
//     document.write(`<li>${o}</li>`);
//
// }
// document.write('</ul>')
//
//
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
];
document.write(`<ol>`)

for (let user of users) {
    if (!user.status){
        document.write(`<li>${user.name} ${user.age}</li>`)
    }
}
document.write(`</ol>`)