// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить вміст об'єкта user в форматі ключ:значення -використовуючи Object.keys()
//  і for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addCharact(newKey){
  this.mood = newKey
},
  changeCharact(newCharact){
  this.hobby = newCharact
},
  changeSecondCharact(newSecondCharact){
  this.premium = newSecondCharact
}
  }
  const display = function(objectToDisplay){
    let newObject = []
    let objKeys = Object.keys(objectToDisplay)

    for (const key of objKeys) {
      console.log(`${key}:${objectToDisplay[key]}`)
      newObject.push(key, objectToDisplay[key])
    }
    return newObject
  }
  user.addCharact('happy')
  user.changeCharact('skydiving')
  user.changeSecondCharact('happy')
  display(user)
  
  // const {hobby = 'skydiving'} = user
  // console.log(user);
  
// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const countProps = function (obj) {
    // return this.Object.keys(obj)
};
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт
//  співробітників і повертає ім'я найпродуктивнішого (який виконав
//  більше всіх задач). Співробітники і кількість виконаних завдань 
// містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
// const findBestEmployee = function (employees) {
//   for (const employee of employees) {
//     for (let i = 0; i < employee.length; i++) {
//       bestOne = employee[i]
//     }
//   }
//    return Math.max(Object.values)
// };
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
//  Функція рахує загальну суму зарплати працівників і повертає її.
//  Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const countTotalSalary = function (employees) {
    // for (const employee of employees) {
        
    // }
};
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів
//  і ім'я властивості. Повертає масив значень певної властивості prop з
//  кожного об'єкта в масиві.
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let allProducts = []
  for (const product of arr) {
    let productName = product.prop
    allProducts.push(productName)
  }
  return allProducts
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []


// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName),
//  яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
const calculateTotalPrice = function (allProducts, productName) {
  for (const product of productName) {
    let totalPrice = product.price * product.quantity
    console.log(product.price);
    
  }
  return totalPrice
};

// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
