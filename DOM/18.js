// Завдання 4

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.



// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
let counterValue = 0

const valueEl = document.querySelector('#value')
const counterIncrementButton = document.querySelector('button[data-action="increment"')
const counterDecrementButton = document.querySelector('button[data-action="decrement"')

counterIncrementButton.addEventListener('click', increment)
counterDecrementButton.addEventListener('click', decrement)
function increment(){
    counterValue += 1
    valueEl.textContent = counterValue
}

function decrement(){
    counterValue -= 1
    valueEl.textContent = counterValue
}

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
//  підставляє його поточне значення в span#name-output. якщо інпут порожній, 
// в спані повинен відображатися рядок 'незнайомець'.

const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', onInput)

function onInput(){
    if (nameInput.value.trim() === '') {
        nameOutput.textContent = 'незнайомець'
    }else{
        nameOutput.textContent = nameInput.value
    }
}

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на
//  правильну кількість символів.

// nameInput.addEventListener('blur', onBlurInput)

// function onBlurInput(){
//     const requiredLength = Number(nameInput.dataset.lenght)
//     const currentLength = nameInput.value.trim().lenght

//     if (currentLength === requiredLength) {
//         nameInput.classList.add('valid')
//         nameInput.classList.remove('invalid')
//     }else{
//         nameInput.classList.add('invalid')
//         nameInput.classList.remove('valid')
//     }
// }

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим, якщо 
// неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const userNameInput = document.querySelector('#validation-input')

userNameInput.addEventListener('blur', onBlurInput)

function onBlurInput(){
    const requiredLength = Number(userNameInput.dataset.length)
    const currentLength = userNameInput.value.trim().length

    if (currentLength === requiredLength) {
        userNameInput.classList.add('valid')
        userNameInput.classList.remove('invalid')
    }else{
        userNameInput.classList.add('invalid')
        userNameInput.classList.remove('valid')
    }
}

// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size.
//  В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const fontSizeConstrol = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

fontSizeConstrol.addEventListener('input', updateFontSize)
function updateFontSize(){
    textSpan.style.fontSize = fontSizeConstrol.value + 'px'
}

