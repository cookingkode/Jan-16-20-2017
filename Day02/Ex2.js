let Account = function(_balance){
	let balance = _balance;
	this.deposit = (amount) => balance += amount;
	this.withdraw = (amount) => balance -= amount;
	this.getBalance = () => balance;
}
let acc1 = new Account(10000);
acc1.deposit(1000);
acc1.withdraw(300);
console.log(`Balance: ${acc1.getBalance()}`);