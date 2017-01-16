//JSON

/*
var person = {
	name : "Ram",
	age : 12,
	eat: function(){
		console.log("Eating");
	}
};
*/
//Enhanced Object Literals
var name = "John";
var person = {
	name,
	age : 12,
	eat(){
		console.log("Eating");
	}
}
console.log(person.name);
person.eat();

//String backtick operator

var summary= `Ok this is a good code. 
It was written after lunch. 
Luckily no mistakes`;

var name = "Sam";
var message = `Hello ${name}`;

//rest operator
var greatest = (...numbers) => console.log(numbers);
greatest(1,2,3,4,5,6,6);

function add(a,b,...numbers){
	console.log(numbers);
}
add(1,2,3,4);
add(34,75,69,98,0);

//Arrow functions
var helloworld = () => console.log("Hello World");
var hello = (name) => "Hello " + name;
var bye = (name) => {
	return "Hello " + name;
};
console.log(hello("Sam"));

//math((a,b)=>a+b);

/*
//1
function hello(name){
	return "Hello " + name;
}

//2
var hello = function(name){
	return "Hello " + name;
}
*/

