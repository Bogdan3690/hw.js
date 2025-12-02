// Завдання 1

// В HTML є список категорій ul#categories.



// Тварини


// <ul>
//  <li>Кіт</li>
//  <li>Хом'як</li>
//  <li>Кінь</li>
//  <li>Папуга</li>
// </ul>


// Продукти


// <ul>
//  <li>Хліб</li>
//  <li>Петрушка</li>
//  <li>Сир</li>
// </ul>


// Технології


{/* <ul>
 <li>HTML</li>
 <li>CSS</li>
 <li>JavaScript</li>
 <li>React</li>
 <li>Node</li>
</ul> */}


// Напиши скрипт, який виконає наступні операції.



// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.



// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).



// Наприклад, для першої категорії вийде:



// Категорія: Тварини
// Кількість елементів: 4


// Завдання 2

// В HTML є пустий список ul#ingredients.




// В JS є масив рядків.



const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

//     const navList = []
// for (const ingredient of ingredients) {
//     const navItem = document.createElement('li')
//     navItem.textContent = ingredient
//     navList.push(navItem)
// }
// const list = document.querySelector('#ingredients')
// list.append(...navList)

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//  після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй
//  document.createElement().





// Завдання 3

// Напиши скрипт для створення галереї зображень по масиву даних.



// В HTML є список ul#gallery.





// Використовуй масив об'єктів images для створення тегів img вкладених в li. 
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().



// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.


const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

    const htmlList = []
for (const img of images) {
    const html = `<li class='gallery-item'>
                    <img src="${img.url}" alt="${img.alt}" width="300">
                   </li>`
    htmlList.push(html)
}
const gallery = document.querySelector('#gallery')
gallery.insertAdjacentHTML('beforeend', htmlList.join(''))