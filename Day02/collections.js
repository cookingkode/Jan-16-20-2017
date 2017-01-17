//Arrays allow duplication
//Arrays do not maintain ORDER

let arr = [];
arr[1] = "Blore";
arr[2] = "Pune";
arr[3] = "Chennai";
arr[3] = "Cochin";
for(var key in arr){
	console.log(key + " " + arr[key]);
}

console.log();
let langs = ["ruby","groovy","scala","ruby"];
for(var i =0;i<langs.length;i++){
	console.log(langs[i]);
}
console.log();

let map = new Map();
map.set(1,"Blore");
map.set(2,"Pune");
map.set(3,"Chennai");
map.set(3,"Cochin");
console.log(map);
console.log(map.has(2));
for(var [key,value] of map){
	console.log(`${key}: ${value}`);
}


console.log();
let cars = new Set();
cars.add("BMW");
cars.add("Audi");
cars.add("Tesla");
cars.add("BMW");
console.log(cars.size);
for(var car of cars){
	console.log(car);
}
