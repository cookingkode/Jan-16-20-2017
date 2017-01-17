String.prototype.to_u = function(){
	return this.toUpperCase();
}
var str = "java";
console.log(str.to_u());

function Employee(name,salary){
	this.name = name;
}
var emp1 = new Employee("Sam",21);
emp1.hello = function(){
	console.log("Hi " + this.name);
}
emp1.hello();



// var str2 = "ruby";
// str2.prototype.hello = function(){
// 	return "Hello " + this;
// }
// console.log(str2.hello());

// function Employee(name,salary){
//
// }
// function Manager(level){
//
// }
// var emp = new Employee("Sam",120000);
// var joe = new Manager(12);
//
// //NOT ENTIRELY CORRECT
// joe.prototype = emp;