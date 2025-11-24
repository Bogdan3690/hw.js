// Створити розмітку з кнопкою та текстовим полем. За допомогою 
// JavaScript отримати доступ до кнопки та текстового поля за їх
// ідентифікаторами та змінити текст на кнопці на значення текстового поля
const buttonElement = document.querySelector('.button')
buttonElement.textContent = 'hello'

// Створити розмітку з заголовком та зображенням. За допомогою
//  JavaScript отримати доступ до зображення та змінити значення
//  атрибута "src" на шлях до іншого зображення.
const img = document.querySelector('.img');
img.src = './img/check.png';

// Створити розмітку з посиланням та зображенням. За допомогою
//  JavaScript отримати доступ до посилання та змінити значення
//  атрибута "href" на нову URL-адресу. Також отримати доступ до
//  зображення та додати новий атрибут "alt" з описом зображення.
const imgTwo = document.querySelector('.img');
const link = document.querySelector('.link');
link.href = 'https://open.spotify.com/artist/3v0qTkZvuro4johOZyIhOm';
imgTwo.alt = 'human icon';

// Створити розмітку зі списком елементів. За допомогою JavaScript
//  отримати доступ до першого елемента списку та змінити його вміст
//  на новий текст.
const list = document.querySelector('.list');
list.firstElementChild.textContent = 'hi';