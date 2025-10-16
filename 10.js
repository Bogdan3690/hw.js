const bankAccount = {
    ownerName: 'Bogdan',
    accountNumber: 1040867,
    balance: 500,
    deposit(addMoney){
        this.balance = this.balance + addMoney
    },
    withdraw(getMoney){
        this.balance = this.balance - getMoney
    }
}
bankAccount.deposit(100)
bankAccount.withdraw(300)
// console.log(bankAccount)
// alert(bankAccount.balance)

// Створіть об’єкт "user", який буде мати властивості 
// "name", "email", "password". Додайте метод
//  "login", який буде перевіряти правильність введеного
//   email та password. 
const user = {
    name: 'Denis',
    email: 'denisdenis@gmail.com',
    password: 12345678,
    login(){
    let lengthOfThePassword = user.password.length
    let correctPassword = '        '
        if (this.email.includes('@'), lengthOfThePassword = correctPassword.length) {
            console.log('email and password correct')
        }else {
            console.log('emaila or password is not correct')
        }
    }
}
user.login()

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
//  Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів
//   Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру
//    потрібно отримати з prompt(). Якщо метод повернув
//  "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
    // temperature: prompt('What is your wheather in your city?'),
    humidity: 2,
    windSpeed: '10km',
    lowerZero(){
        if (this.temperature >= 0) {
            console.log('температура выше 0 градусів Цельсія')
        }else {
            console.log('температура нижче 0 градусів Цельсія')
        }
    }
}
weather.lowerZero()

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та
//  "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. {}
const movie = {
    title: 'Maze runner',
    director: 'Wes Ball',
    year: 2014,
    rating: 9.2,
    limitOfRating(){
        if (this.rating >= 8) {
            console.log('rating выше 8')
        }else {
            console.log('rating ниже 8')
        }
    }
}
movie.limitOfRating()