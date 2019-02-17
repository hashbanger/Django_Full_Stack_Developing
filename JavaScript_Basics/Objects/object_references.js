// Example we create an expense manager

let myAccount = {
    name: 'Prashant',
    expenses: 0,
    income: 0
}


// creating a function to allow us to modify the expenses

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount) // I don't get two different objects
// myAccount is a pointer to the object and is somewhere in the RAM,
// when we pass myAccount in the function the formal account parameter is a 
// pointer reference to the actual and does change the values in the real one.
// However if I reassign the variable the binding breaks as can be seen in below snippet.


let myAccount2 = {
    name: 'Prashant',
    expenses: 0,
    income: 0
}


// creating a function to allow us to modify the expenses

let addExpense2 = function(account, amount){
    account = {}
    console.log(account)
}

addExpense2(myAccount2, 2.50)
console.log(myAccount2)

// Even if we assign the myAccount to some other variable, 
// it would be a shallow copy and will change actual account