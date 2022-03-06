const doSomethingBefore = () => {
  numbers.push(2);
};

const doSomething = () => {
  numbers.push(1);
};

let numbers = [];

console.log(numbers);
doSomething();
console.log(numbers);
