function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false);

// this return undefined because of hoisting

/***
  Hoisting:
  before any Javascript code is executed,
  all variables are hoisted, which means that all variables are raised to the top
  of the function scope
***/

// what actually the code is
function getClothing(isCold) {
  var freezing, hot;

  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing(false); // undefined

// let and const are scoped to the block, not the function

function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';

    try {
      console.log(freezing);
    } catch (err) {
      console.log('freezing is not defined');
    }
  }
}

// getClothing(false); // this will throw an error of freezing is undefined

/*
  let: Variables declared with let can be reassigned,
       but can’t be redeclared in the same scope.

  const: Variables declared with const must be assigned an initial value,
         but can’t be redeclared in the same scope, and can’t be reassigned.
*/

let instructor = 'James';
instructor = 'Richard';
console.log(instructor);

// Change var per let and const

const CHARACTER_LIMIT = 4;

let posts = ['Thing 1', 'Thing 2', 'Thing 3'];

// prints posts to the console
function displayPosts() {
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].slice(0, CHARACTER_LIMIT));
  }
}

displayPosts();
