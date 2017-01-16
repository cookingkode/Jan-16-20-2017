//Closures
var sleep = function(){
	console.log("Sleeping");
}
sleep();

//Higher order functions
function doSomething(arg){
	arg();
}

doSomething(function(){
	console.log("WTH");
});

var eat = function(){
	console.log("Eating");
};
doSomething(eat); //doSomething(eat());

function run(){
	console.log("Running");
}
doSomething(run);