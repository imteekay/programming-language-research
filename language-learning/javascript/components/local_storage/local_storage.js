const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

/* Example of use */
let user = {
  name: "TK",
  age: 26
}

setLocalStorage('user', user);
getLocalStorage('user'); // { name: "TK", age: 26 }
