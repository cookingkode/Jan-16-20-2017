class Account{
	// get balance(){
	//
	// }
	// set balance(amount){
	//
	// }
	constructor(_balance){
		this.balance = _balance;
	}
	deposit(amount){
		this.balance += amount;
	}
	withdraw(amount){
		this.balance -= amount;
	}
}
let acc = new Account(10000,12,12);
let acc1 = new Account(10000);
acc1.deposit(1000);
acc1.withdraw(300);
console.log(`Balance: ${acc1.balance}`);