var PI = 3.14;

// This function is not pure because it uses an external variable PI
var calculateArea = function (radius) {
  return radius * radius * PI;
};

// This function is now pure because it uses only data passed as parameters
var calculateArea = function (radius, PI) {
  return radius * radius * PI;
};

var count = 1;

// This function is not pure because it modifies a global variable
var increaseCount = function (value) {
  count += value;
};

var array = [1, 2, 3, 4, 5];

// This function is not pure because we change the global variable array
var reverseArray = function (array) {
  return array.reverse();
};

var reversedArray = reverseArray(array);
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(array); // [5, 4, 3, 2, 1]

// This function is not pure because it uses an external function that access an external API
var amountExceedsBuyLimit = function (amount) {
  var limit = getBuyLimits(); // request an external API
  return amount > limit;
};

// We "fix" this function passing the value limit as a parameter after call the API request
var limit = getBuyLimits();
var amountExceedsBuyLimit = function (amount, limit) {
  return amount > limit;
};
