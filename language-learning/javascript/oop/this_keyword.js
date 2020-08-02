function fn () {
  console.log(this);
}

fn();
// Prints Global Object
// Or 'undefined' in "strict mode". :O

var obj = {
  fn : function(a, b) {
    console.log(this);
  }
}
 		 
 obj.fn(1, 2);
// Prints obj, cool

var objFn = obj.fn;
objFn(1 , 2);
// Prints Global Object, weird.

obj.fn = fn;

obj.fn();
// Prints obj, crazy!

// Reason: JavaScript eval 'this' keyword using dynamic scoping. (https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope)
// The rule above works just for classic functions like 'fn'. Arrow functions is a bit different.


var fun = function(one, two) {
  console.log(one, two);
};

var r = {}, g = {}, b = {};

fun(g, b); // log {}, {} (green and blue objects)
