let array = ['hello']
let vowels = ['e', 'o']
let total = ''

for(const letter of array[0]) {
    if(vowels.includes(letter)){
        total += '*'
    }else{
        total += letter
    }
}
console.log(total)


let arr = [1, 2, 3];
let newArr = [];

for(let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
    newArr[arr.length * 2 - 1 - i] = arr[i];
}
console.log(newArr)