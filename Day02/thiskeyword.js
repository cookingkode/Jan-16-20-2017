function foo(){
	var self = this;
	this.name = "Ram";
	return function(){
		this.name = "Sam";
		console.log(this.name);
		console.log(self == this);
	}
}
var f1 = foo();
f1();