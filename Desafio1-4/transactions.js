const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

  const transactionsModel = [
    {type: 'credit', value: 50 }, 
    { type: 'credit', value: 120 }, 
    { type: 'debit',  value: 80 }, 
    { type: 'debit',  value: 30 }
  ]


function createTransaction(transaction){
    user.transactions.push(transaction)
    transaction.type === 'credit' ? user.balance += transaction.value : user.balance -= transaction.value
}
function getHigherTransactionByType(type) {
    let higherTransaction =0
    let higherValue = 0

    for (let transaction of user.transactions) { 
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    console.log(`Sua Maior transação de ${type} foi no valor de: ${higherValue}`)
    return higherTransaction
}

function getAverageTransactionValue() {
    let totalSum = 0

    for(let transaction of user.transactions) {
        totalSum += transaction.value
    }
    console.log(`O valor Médio das transações foi de: R$ ${totalSum / user.transactions.length} `)
    return totalSum / user.transactions.length
}

function getTransactionsCount() {
    let totalCount = {credit: 0, debit: 0}

    for (let transaction of user.transactions) {
        transaction.type === 'credit' ? totalCount.credit++ : totalCount.debit++
    }
    console.log(`O número de cada transação realizada no tipo Crédito foi de: ${totalCount.credit} vezes, e no tipo Débito foram: ${totalCount.debit} vezes`)
    return totalCount
}
function getBalance(){
    console.log(`Saldo atual de ${user.name} é de: R$ ${user.balance}`)
}
function realizeTransactions(transactions){
   for (const transaction of transactions) {
       createTransaction(transaction)
   }
}

realizeTransactions(transactionsModel)

getBalance()

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()
getTransactionsCount()