// 1
const celsius = 31;
const fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// 2
const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth  = daysInMonth * 1440;
console.log(hoursInMonth);
console.log(minutesInMonth);

// 3
const health = 100;
const energy = 100;
const tiredHealth = health - 40;
const tiredEnergy = energy - 70;
console.log(tiredHealth);
console.log(tiredEnergy);

// 4
const totalPrice = 130;
const discountedPrice = totalPrice * 0.90;
console.log(discountedPrice);
                                         
// 5
const floatNumber = 12.78;
const roundedDown = Number(Math.floor(floatNumber));
console.log(roundedDown);
// 6
const floatString = "45.67";
const parsedFloat = Number(parseFloat(floatString));
console.log(parsedFloat);
// 7
const intString = "123";
const parsedInt = Number(parseInt(intString));
console.log(parsedInt);
// 8
const number = "9";
const sqrtNumber = Number(Math.sqrt(number));
console.log(sqrtNumber);
// 9
const integer = 42;
const stringNumber = "256";
const convertedString = Number(toString(integer));
const convertedInt = Number(parseInt(stringNumber));
console.log(convertedInt);
console.log(convertedString);