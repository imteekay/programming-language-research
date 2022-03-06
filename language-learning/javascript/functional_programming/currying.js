var greet = function (greeting, name) {
  console.log(greeting + ' ' + name);
};

greet('Hello', 'Tk');

var greetCurried = function (greeting) {
  return function (name) {
    console.log(greeting + ' ' + name);
  };
};

var greetHello = greetCurried('Hello');
greetHello('Leandro');
greetHello('Tk');
greetCurried('Hello')('Leandro');
greetCurried('Hello')('Tk');
