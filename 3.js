const result = 5+5+'5';
console.log(result);
console.log(typeof result);

const email = "dblevko@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

const one = "My";
const two = "name";
const tree = "is";
const fullName = `${one} ${two} ${tree} Victor`;
console.log(fullName);

const userName = "Леша";
const payment = 200;
// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

    // const numberFromClient = prompt("How much time?");
    // const numberHours = numberFromClient / 60;
    // const days = Math.floor(numberHours / 24);
    // const hours = Math.floor(numberHours % 60);
    // const modHours = String(hours).padStart(2, 0);
    // const minutes = numberFromClient % 60;
    // const modMinutes = String(minutes).padStart(2, 0);
    // console.log(`${Math.round(numberHours)}:${minutes}`);

const balance = "Ваш баланс поповнено на 1.0000"
console.log(balance.length);