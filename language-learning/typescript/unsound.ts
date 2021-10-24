// A sound type system only accepts programs with correct types. TypeScript's type system is unsound:
let names: string[] = ['Amir', 'Betty'];
let unsoundNames: (string | number)[] = names;

// This is unsound! It causes the "names" array to contain a number!
unsoundNames.push(5);
names; // ['Amir', 'Betty', 5]

// Other example with undefined value while the type is a string
const blas: string[] = ['Amir', 'Betty'];
const bla: string = blas[2];
bla; // undefined

// With any, anything can be assigned to anything. No type error:
const n: any = 5;
const s: string = n;
s; // => 5

const user: any = { name: 'Amir' };
const numbers: number[] = user;
numbers; // => {name: 'Amir'}
