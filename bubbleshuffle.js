function Account(balance){
	var account = {} ;
	account.balance = balance
	account.spendings = spendings
	account.earnings = earnings
	account.history = history
	account.display = display
	account.incomes = incomes
	// account.expenses = expenses
	// account.salary = salary 
	account.checkBalance = checkBalance
	return account
}


var transactions = []





var checkBalance = function (){
	return "you have " + this.balance +" $ left in your account "
}

var spendings = function (item, price){
	if(typeof price === "number"){
		var spent = {}
		spent.prix = -Math.abs(price)
		spent.thing = item
		transactions.push(spent)
		this.balance-=price
	}
	else {
		alert ("Please enter a valid number")
	}
}
var earnings = function(item,price){
		if (typeof price === "number"){
		var gain = {}
		gain.prix = price
		gain.thing = item
		transactions.push(gain)
		this.balance += price
	}
	else {
		alert ("Please enter a valid number")
	}
}

var display = function(){
	var rezult = ""
	for (i=0; i<transactions.length;i++){
		rezult += transactions[i].thing + " " + transactions[i].prix + "\n"}
	return rezult
}

var incomes = function(){
	var sumIncomes = 0
	for (var i = 0; i < transactions.length; i++) {
		if(transactions[i].prix>0){
			sumIncomes += transactions[i].prix
		}
	}
	return sumIncomes
}

var expenses = function(){
	var sumExpenses = 0
	for (var i = 0; i < transactions.length; i++) {
		if(transactions[i].prix<0){
			sumExpenses += transactions[i].prix
		}
	}
	return sumExpenses
}
