// Завдання 1

// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури
//  (наприклад, вліво / вправо)

const gallery = document.querySelector('.gallery')

leftBtnScroll()
rightBtnScroll()

function leftBtnScroll(){
    document.addEventListener('keydown', onLeftArrow)
}

function onLeftArrow(event){
    console.log(event.code);
    if (event.code === 'ArrowLeft') {
        gallery.scrollBy({
            left: -320,
            behavior: 'smooth'
        })
    }
}

function rightBtnScroll(){
    document.addEventListener('keydown', onRightArrow)
}

function onRightArrow(event){
    console.log(event.code);
    if (event.code === 'ArrowRight') {
        gallery.scrollBy({
            left: 320,
            behavior: 'smooth'
        })
    }
}




//  Завдання 2

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість
//  елементів в input і натискає кнопку Створити, після чого рендериться колекція. 
//  При натисканні на кнопку Очистити, колекція елементів очищається.

let input = document.querySelector('#controls input')
let clearBox = document.querySelector('button[data-action="destroy"]')
let renderBtn = document.querySelector('button[data-action="render"]')
let boxes = document.querySelector('#boxes')


// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число.
//  Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

renderBtn.addEventListener('click', () => {
    const amount = Number(input.value)
    createBoxes(amount)
})

clearBox.addEventListener('click', destroyBoxes)

// Кожен створений div:

function createBoxes(amount){
    boxes.innerHTML = ''
    let size = 30
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div')

        div.style.width = `${size}px`
        div.style.height = `${size}px`
        div.style.backgroundColor = getRandomColor()

        boxes.append(div)
        size += 10
    }
}



// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

function getRandomColor(){
    return `rgb(
    ${Math.floor(Math.random() * 256)}
    ${Math.floor(Math.random() * 256)}
    ${Math.floor(Math.random() * 256)}
    )`
}

// Створи функцію destroyBoxes(), яка очищає div#boxes.
//  */

function destroyBoxes() {
    boxes.innerHTML = ''
}