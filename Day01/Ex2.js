//1
var item = [];

item['name'] = ['Sam'];
item['age'] =  12;
item['country'] = 'India';
item['city'] = 'Pune';

var queryString = "?";
for(var key in item){
	queryString += key + "=" + item[key] + "&";
}
queryString = queryString.substring(0,queryString.length - 1);
console.log(queryString);

//2

function add(){
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	console.log("Sum: " + sum);
}
function greatest(){
	var max = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if(arguments[i] > max)
			max = arguments[i];
	}
	console.log("Greatest : " + max);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);









