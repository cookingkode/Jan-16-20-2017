
function math(operation){
	var a = 1;
	var b = 2;
	console.log(operation(a,b));
}

math(function(n1,n2){ return n1+n2; });
math(function(n1,n2){ return n1-n2; });
math(function(n1,n2){ return n1*n2; });
math(function(n1,n2){ return n1/n2; });
math(function(n1,n2){ return n1+n2 + 2*n1*n2; });

/*
function add(a,b){
	console.log(a+b);
}
function subtract(a,b){
	console.log(a-b);
}
add(1,2);
subtract(1,2);
*/