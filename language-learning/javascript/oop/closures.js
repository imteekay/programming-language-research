// Closures are functions that refer to independent (free) variables. 
// In other words, the function defined in the closure ‘remembers’ the environment (scope) in which it was created.

function numberGenerator() {
	// "num" is a local “free” variable that ends up within the closure
  var num = 1;

  function checkNumber() { 
    console.log(num);
  }

  num++;

  return checkNumber;
}

var number = numberGenerator();
number(); // 2

function sayHello() {
  var say = function() { console.log(hello); }
  
  // "hello" is a local “free” variable that ends up within the closure
  var hello = 'Hello, world!';

  return say;
}

var sayHelloClosure = sayHello(); 
sayHelloClosure(); // ‘Hello, world!’