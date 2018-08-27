let myAccount = {
    name: 'Mary',
    expenses: 0,
    income: 0,
}

let otherAcoount = myAccount;

let addExpense = function (account, amount) {
    //account = {}
    account.expenses = account.expenses + amount;
    console.log(account)
}

let addIncome = function(account, income) {
    account.income += income;
}

let resetAccount = function(account){
    account.income = 0;
    account.expenses = 0;
}

let accountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Accont for ${account.name} $${balance} $$`
}

addExpense(myAccount, 2.50);
addExpense(otherAcoount, 3)

console.log(myAccount)
console.log(otherAcoount);

addIncome(myAccount, 200);
addExpense(myAccount, 10);
addExpense(myAccount, 23333);
console.log(accountSummary(myAccount));