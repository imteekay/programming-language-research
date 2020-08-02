// assigning each variable to an object
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

// using object literal shorthand
let name = 'TK';
let age = 26;
let nationality = 'Brazilian';

let tk = { name, age, nationality };
console.log(`${tk.name}, ${tk.age}, ${tk.nationality}`);

// adding methods to objects
const test = {
  myMethod: function () {
    // ...
  }
};

tk = {
  name,
  age,
  nationality,
  sayHello() {
    return 'Hello people!';
  }
}

console.log(`${tk.name}, ${tk.age}, ${tk.nationality} says "${tk.sayHello()}"`);
