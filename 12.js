// 1
// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи 
// для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
//   +
  WITHDRAW: 'withdraw',
//   -
};
/*
 * Кожна транзакція - це об'єкт з властивостями: 
id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    }
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount
    let transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(transaction)
  },
  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.*/
  withdraw(amount) {
    if (amount > this.balance) {
        console.log('Not enough money');
    }else{
      this.balance = this.balance - amount
      let transaction = this.createTransaction(amount, Transaction.WITHDRAW)
      this.transactions.push(transaction)
    }
  },
  /*
   * Метод повертає поточний баланс*/
  getBalance() {
    return this.balance
  },
  // HISTORY OF TRANSACTIONS
  /*
   * Метод шукає і повертає об'єкт транзакції по id*/
  getTransactionDetails(id) {
    for (const oneTran of this.transactions){
      if (oneTran.id === id) {
        return oneTran
      }
    }
    return 'Transaction not found'
  },
  /*
   * Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій*/
  getTransactionTotal(type) {
    let total = 0
    for (const oneTran of this.transactions){
      if (oneTran.type === type) {
        total += oneTran.amount
      }
    }
    return total
  },
};

console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());
console.log(account.transactions);
