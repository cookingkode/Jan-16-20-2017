function Book(theTitle,thePrice){
	this.title = theTitle;
	this.price = thePrice;
	this.buy = function(store){
		console.log(`Buying ${this.title} from ${store}`);
	}
	return this;
}
var b = Book("XML",112);
console.log(b.title);

var b1 = new Book("AJAX",12);
console.log(`${b1.title} ${b1.price}`);
b1.buy("Amazon");

var b2 = new Book("ReactJS",100);
console.log(`${b2.title} ${b2.price}`);
b2.buy("FK");