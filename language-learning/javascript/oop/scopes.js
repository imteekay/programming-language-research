var globalVariable = true;

if (globalVariable) {
  // here is not a new scope
}

var firstFunction = function() {
  var functionLocalVariable;

  console.log(globalVariable); // we can access global variables inside a new scope (function)
};
