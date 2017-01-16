//Number,String,Boolean,Object

var arr = [];
arr = [1,2,"java",false];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

var capitals = [];
capitals["India"] = "New Delhi";
capitals["France"] = "Paris";
capitals["Spain"] = "Madrid";

for(var key in capitals){
	console.log(key + " -> " + capitals[key]);
}


var n = 12.344;
n = "string";
n = 'string';
n = false;
n = null;

var i;//undefined
if(i == undefined)
	console.log("i is undefined");
else
	console.log(i);