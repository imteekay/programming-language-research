var f;

// Example 1
function example1() {
  var x = 0;

  var bla = function() {
    console.log(x);
  }

  x++;
  return bla;
}

f = example1();
f();

// Example 2
function example2() {
  var bla = function() { console.log(x); }

  var x = 'Hello Closure';
  return bla;
}

f = example2();
f();
