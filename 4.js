// let stringOne = prompt("Enter content").trim();
// let stringTwo = prompt("Enter content").trim();
// if (stringOne != "" && stringTwo != ""){
//     alert("Обидва поля заповнені")
// }else{
//     alert("Не всі поля заповнені")
// }

// let number1 = Number(prompt("enter number"));
// let number2 = Number(prompt("enter second number"));
// let sum = number1 + number2
// if (sum > 10){
//     alert("Сума більша за 10");
// }else{
//     alert("Сума менша або дорівнює 10")};

// let text = prompt("Enter").toLowerCase()
// if(text.includes("javascript")){
//     alert("Текст містить слово JavaScript");
// }else{
//     alert("Текст не містить слово JavaScript")
// }

// let numbers = Number(promt("Enter Numbers"))
// if (numbers >= 10 && numbers <= 20){
//     alert("Число входить в діапазон від 10 до 20")
// }else{
//     alert("Число не входить в діапазон від 10 до 20")
// }

let email = prompt('email');
let name = prompt("Name");
let password = prompt('password');
if (email.includes("@.") && name.lenght < 3 && password.length < 6){
    alert('Перенаправлення на іншу сторінку');
}else{
    alert('Помилка: неправильне заповнення');
}
