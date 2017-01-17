//var keyword scope is a function
//let and const keywords scope is block

//Can declare a variable without var or let or const 
//HIGHLY DISCOURAGED

function scope_of_constant(){
	if(true){
		const i = 10;	
	}
	console.log(i);//ERROR
}
scope_of_constant();

//const key;//ERROR
//key = "cool";

const arr = [1,2,3];
//arr = [4,5,6];
arr[0] = 4;

var str = "java";
var str = 100;
var str = false;
console.log(str);

let str2 = "java";
//let str2 = 100; // ERROR

const animal = "Dog";
//animal = "Cat"; //ERROR

function writeCode(){
	
	if(true){
		var i = 10;
		let j = 20;
	}
	console.log(i);
	//console.log(j); ERROR j is undefined
}
writeCode();
//console.log(i); undefined
