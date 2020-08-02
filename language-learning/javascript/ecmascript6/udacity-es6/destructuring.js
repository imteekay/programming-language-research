// Getting each element from array
const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

// Getting each property from object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

// destructuring arrays
let names = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = names;

console.log(first, second, third);

// destructuring objects
const tk = {
  name: 'TK',
  age: 26,
  nationality: 'Brazilian'
};

const { name, age, nationality } = tk;

console.log(`${name}, ${age}, ${nationality}`);

// destructuring object functions-property
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function () {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function () {
    return 2 * Math.PI * this.radius;
  }
};

let { radius, getArea, getCircumference } = circle;

console.log(getArea()); // NaN, because `this` does not have a reference to the circle anymore

/*
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = [
  'red',
  'basketball',
  'paperclip',
  'green',
  'computer',
  'earth',
  'udacity',
  'blue',
  'dogs'
];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
