var balanceAmount = document.getElementById('balance');
var money_plus = document.getElementById('money-plus');
var money_minus = document.getElementById('money-minus');
var list = document.getElementById('list');
var form = document.getElementById('form');
var text = document.getElementById('text');
var price = document.getElementById('amount');
var btnexp = document.getElementById('btn-expense');
var userName = document.getElementById("user")
var passWord = document.getElementById("pass")
var id = 0

function Account(balance){
	var account = {} ;
	account.balance = balance
	account.spendings = spendings
	account.earnings = earnings
	account.history = history
	account.display = display
	account.incomes = incomes
	account.expenses = expenses
	account.checkBalance = checkBalance

	return account
}


var transactions = []


var checkBalance = function (){
	balanceAmount.textContent = "$" + this.balance 
}

var spendings = function (item, price){
	if(typeof price === "number"){
		var spent = {}
		spent.prix = -Math.abs(price)
		spent.thing = item
		spent.id = "spent" + id
		transactions.push(spent)


		this.balance-=price
	}
	else {
		alert ("Please enter a valid number !")
	}
	return this.balance
}
var earnings = function(item,price){

		if (price !== "" || item !== ""){
		var gain = {}
		gain.prix = Number(price)
		gain.thing = item
		gain.id = "gain" + id
		transactions.push(gain)
		
		this.balance += price
	}
	else {
		alert ("Please enter data ! ")
	}
}

var display = function(){

	
	var show = document.createElement('li')

	if (transactions[transactions.length-1].prix < 0){
			show.classList.add('minus')
			
			show.classList.add(`${"spent" + id}`)
				
			show.innerHTML = `
	${transactions[transactions.length-1].thing} <span>$${transactions[transactions.length-1].prix}</span> <button class="delete-btn" id=${ 'spent' + id} onclick="deleteHistory(event)">x</button>
	`;
id++
	list.appendChild(show)
	} else {
		show.classList.add('plus')
		
		show.classList.add(`${"gain" + id}`)

		show.innerHTML = `
	${transactions[transactions.length-1].thing} <span>$${transactions[transactions.length-1].prix}</span> <button class="delete-btn" id=${ 'gain' + id} onclick="deleteHistory(event)">x</button>
	`;
	id++
	list.appendChild(show)
		}
		
	

}



var incomes = function(){
	var sumIncomes = 0
	for (var i = 0; i < transactions.length; i++) {
		if(transactions[i].prix>0){
			sumIncomes += transactions[i].prix
		}
	}
	return "$+" + sumIncomes + ".00"
	
}


var expenses = function(){
	var sumExpenses = 0
	for (var i = 0; i < transactions.length; i++) {
		if(transactions[i].prix < 0){
			sumExpenses += transactions[i].prix
		}
	}
	return "$" + sumExpenses + ".00 "
	
}
var $user = Account(0)


$("#btn-expense").click(function(){
	if (text.value === "" && price.value === "" ){
		alert ("Please enter valid data !")
	}
		else{
			console.log(price.value)
			$user.spendings(text.value,+price.value)
		$user.checkBalance()
		text.value = ""
		price.value = ""
		money_minus.textContent=$user.expenses()
		display()
	}

});


// $("#balance").append(function(){checkBalance()})
$("#btn-income").click(function(){
	if (text.value === "" && price.value === ""){
		alert ("Please enter valid data !")
	}
	else {
	$user.earnings(text.value,+price.value)
	$user.checkBalance()
	text.value = ""
	price.value = ""
	money_plus.textContent=$user.incomes()
	display()
	}
	// localStorage.setItem("firsTry",$("#text").val())

});





$("#money-plus").append(function(){
	+$user.incomes()
})


$("#money-minus").append(function(){
	+$user.expenses()
})

$("#balance").append(function(){$user.checkBalance()
})
var deleteHistory = function (event) {
	var currentId = event.target.id
	$(`${'#' + currentId}`).hide()
	$(`${'.' + currentId}`).hide()
	for ( var i = 0; i < transactions.length; i++) {
		
		if(transactions[i].id === currentId){
			console.log(Number(this.balance.textContent.slice(1,this.balance.textContent.length)))
			$user.balance = Number(this.balance.textContent.slice(1,this.balance.textContent.length)) - transactions[i].prix
			console.log($user.incomes())
			transactions.splice(i, 1)
			money_minus.textContent=$user.expenses()
			money_plus.textContent=$user.incomes()
			$user.checkBalance()
		}	
	}
}


$(".container").hide()


$("#logIn").click(function(){
	if (userName.value === "" || passWord.value === ""){
		alert("Please enter your data !")
	}
	else if(userName.value !== "Aziz" && passWord.value !== "FISH") {
		alert("User does not exist")
	}
	else if(userName.value !== "Aziz"){
		alert("Wrong username")
	}
	else if (passWord.value !== "FISH") {
		alert("Wrong Password")
	}
	else if(userName.value === "Aziz" && passWord.value === "FISH"){
	$(".container").show()
	$("#logging").hide()
	$("#logIn").hide()
	}
		
})
	



	

