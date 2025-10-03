let array = ["Poly", "Ajax", "Bob"];
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
// logItems(array)   5

// Напиши скрипт підрахунку вартості гравіювання прикрас.
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок
//  і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ").length;
  let mul = words * pricePerWord;
  return mul;
}
console.log(calculateEngravingPrice("Sorry! We are out of stock!", 4));

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
//  (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  let words = string.split(" ");
  let longest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(findLongestWord("Learning js is fun!"));

// telegram problems

let sayHello = function () {
  console.log("Hello, world!");
};
sayHello();

let showAuthor = function () {
  console.log("Bogdan");
};
showAuthor();

let printCurrentYear = function () {
  console.log(2025);
};
printCurrentYear();

let greetUser = function () {
  console.log("Вітаю на уроці JavaScript!");
};
greetUser();

let printSeparator = function () {
  console.log("**********************");
};
printSeparator();
printSeparator();
printSeparator();

let sayHelloTo = function (name) {
  console.log("Hello, " + name + "!");
};
sayHelloTo("Ira");

let addNumbers = function (a, b) {
  return a + b;
};
console.log(addNumbers(10, 5));
console.log(addNumbers(10, 10));

function printSquare(num) {
  console.log(num * num);
}
printSquare(5, 5);
printSquare(10, 10);

function repeatMessage(message, times) {
  for (let i = 0; i < times; i++) {
    console.log(message, times);
  }
}
repeatMessage("alo", 4);
repeatMessage("Hey", 2);

function showFullName(firstName, lastName) {
  console.log("My name is " + firstName + " " + lastName);
}
showFullName("Bogdan", "Levko");
