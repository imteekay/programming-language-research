var gold = { 
	a: 1 
};

console.log(gold.a); // 1
console.log(gold.z); // undefined

var blue = extend({}, gold);
blue.b = 2
console.log(blue.a); // 1
console.log(blue.b); // 2
console.log(gold.z) // undefined

var rose = Object.create(gold);
rose.b = 2;
console.log(rose.a); // 1
console.log(rose.b); // 2
console.log(rose.z); // undefined

gold.z = 3;
console.log(blue.z); // undefined
console.log(rose.z); // 3