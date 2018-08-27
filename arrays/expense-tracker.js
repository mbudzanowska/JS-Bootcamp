let account = {
    name: 'Maria Budzanowska',
    expenses: [],
    incomes: [],
    addExpense: function(description = '', amount){
        this.expenses.push({
            description, amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense.amount);
        let totalIncomes = 0;
        this.incomes.forEach(income => totalIncomes += income.amount);
        return `Total amount spend: $${totalExpenses}, Total income: $${totalIncomes}, balance $${totalIncomes - totalExpenses} for ${this.name}'s account`
    },
    addIncome: function(description = '', amount){
        this.incomes.push({
            description, amount
        })
    },
}

// expense: description, amount
// addexpense

account.addExpense('food', 203);
account.addExpense('coffe', 9)
account.addIncome('granny', 1000)
console.log(account.getAccountSummary());