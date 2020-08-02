const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;

const doubleSum = (a, b) => sum(a, b) * 2;

const doubleSubtraction = (a, b) => subtraction(a, b) * 2;

const doubleOperator = (operator, a, b) => operator(a, b) * 2;

const value = doubleOperator(sum, 1, 2);
const other = doubleOperator(subtraction, 1, 2);

console.log(value);
console.log(other);
