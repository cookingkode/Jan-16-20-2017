//Function hoisting

console.log(name);
var name = "Ram";

sleep(12);
function sleep(hours){
	console.log("Sleeping " + hours + " hours");
}
