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
        if (user.email = '@') {
            console.log('email correct')
        }else {
            console.log('email is not correct')
        }
    }
}
user.login
console.log(user )