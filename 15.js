// Завдання 1

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
//  В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення
//  полів login і email об'єкта який його викликав.

function Account({login, email}){
    this.login = login
    this.email = email
}

Account.prototype.getInfo = function () {
    console.log(this.login, this.email);
}

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// Завдання 2

// Напиши клас User для створення користувача з наступними властивостями:

class User {
    constructor({name, age, followers}){
    this.name = name
    this.age = age
    this.followers = followers
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old 
// and has ${кількість фоловерів} followers

// const mango = new User({
//  name: 'Mango',
//  age: 3,
//  followers: 17,
// });

// mango.getInfo(); // User Mango is 3 years old and has 17 followers

// const poly = new User({
//  name: 'Poly',
//  age: 3,
//  followers: 20,
// });

// poly.getInfo(); // User Poly is 3 years old and has 20 followers


// Завдання 3

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику
//  буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

class Storage {
    constructor(items){
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item){
        const index = this.items.indexOf(item)
    if (index !== -1){
        this.items.splice(index, 1)
    }
    }
}
// getItems() //  — повертає масив поточних товарів
// addItem(item) //  — отримує новий товар і додає його до поточних
// removeItem(item) // — отримує товар і, якщо він є, видаляє його з поточних


const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

console.table(storage.getItems()); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


// Завдання 4

// Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість
//  _value.

class StringBuilder{
    constructor(initialValue){
        this.value = initialValue
    }

    append(str) {
        this.value += str
    }
    
    prepend(str) {
        this.value = str + this.value
    }
    
    pad(str) {
        this.value = str + this.value + str
    }
}
// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='