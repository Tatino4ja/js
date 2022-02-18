// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this ['id'] = id;
//     this ['name'] = name;
//     this ['surname'] = surname;
//     this ['email'] = email;
//     this ['phone'] = phone;
//
// }
//
// let emptyArray = [
//     new User(5, 'olga', 'gush', 'dshk@gmai.com', 380502244552),
//     new User(9, 'nina', 'mush', 'dcvbck@gmai.com', 380502244553),
//     new User(4, 'ira', 'push', 'efk@gmai.com', 380502244555),
//     new User(2, 'vira', 'dush', 'dshcxbk@gmai.com', 380502244982),
//     new User(7, 'nadiia', 'lush', 'deek@gmai.com', 380502244957),
//     new User(1, 'vitia', 'tush', 'dsdv@gmai.com', 380502268552),
//     new User(3, 'roma', 'kush', 'dcb_vhk@gmai.com', 380502244532),
//     new User(6, 'ira', 'vush', 'dcvzk@gmai.com', 380502244558),
//     new User(8, 'lili', 'fush', 'dszvk@gmai.com', 380502244512),
// ]
// console.log(emptyArray)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id
// // (filter)
//
// // let t = emptyArray.filter((newUser) => {
// //     if (newUser.id % 2 === 0) {
// //         return newUser
// //     }});
// //
// // console.log(t)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(emptyArray.sort((a, b) => a.id - b.id));
//
// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// // (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//
//     }
// }

/// створити пустий масив, наповнити його 10 об'єктами Client
// let emptyArray = [
//     new Client(1, 'Lili', 'bobo', 'jdhfkds@.com', 365222545555, ['book', 'candys']),
//     new Client(2, 'bob', 'Prs', 'dsf@fl.com', 365445520, ['apples', 'fish', 'tea']),
//     new Client(3, 'Roma', 'Smitt', 'sd@ukr.net', 55646821313, ['icecream', 'cofe']),
//     new Client(4,'Gil', 'mat', 'kjhkj@.net', 25454353523215, ['beer']),
//     new Client(5, 'mag', 'taylor', 'dkjflsdkj@com', 586585658, ['book', 'candys','icecream', 'cofe']),
//     new Client(6, 'gil', 'joj', 'dhjfks@dlkjl', 25658526, ['fish']),
//     new Client(7, 'rob', 'stark', 'dfjk@com', 256998523642, ['bread', 'milk']),
//     new Client(8, 'dajneris', 'targ', 'dfhlj@kdfl', 987598624, ['dragons', 'orange', 'oil']),
//     new Client(9, 'megan', 'fox', 'posdsfsdfes@com', 65232115, ['apples', 'fish', 'tea']),
//     new Client(10, 'harold', 'king', 'lisihlefg@ukr.net', 123456789, ['cofe'])
// ]


// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// // по зростанню. (sort)
//
// let clients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(clients)


//