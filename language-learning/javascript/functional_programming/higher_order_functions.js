// functions are values

function triple(x) {
  return x * 3;
}

var triple = function (x) {
  return x * 3;
};

var waffle = triple;

console.log(waffle(3));
