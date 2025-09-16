let numbers = [5, 0, 15]
numbers[1] = 10
console.log(numbers)

let colors = ['red', 'black', 'green']
colors[3] = 'blue'
console.log(colors)




// const cart = [17, 13, 20];
// let total = 0
// for (let i = 0; i < cart.length; i += 1){
//     cart[i] += cart[1, 2]
//     console.log(cart[i])
// }



// const fiveNumbers = [17, 13, 20, 32, 61];
// for (let i = 0; i < fiveNumbers.length; i += 1){
//     console.log(fiveNumbers[i])
// }

const fiveWords = ['phone', 'book', 'headphones', 'monitor', 'door'];
for (const words of fiveWords) {
    if(words.length > 5){
        console.log(words)
    }
}