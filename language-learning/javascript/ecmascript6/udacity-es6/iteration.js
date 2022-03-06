const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

// using for...in --> remove the counting but keep the index
for (const index in digits) {
  console.log(digits[index]);
}

// using for...of --> remove the counting and the index. Access the "current" object item
for (const digit of digits) {
  console.log(digit);
}

//
const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

// your code goes here
for (const day of days) {
  console.log(day[0].toUpperCase() + day.substring(1));
}
