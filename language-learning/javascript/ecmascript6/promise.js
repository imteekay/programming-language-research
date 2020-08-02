let promise = new Promise(function(resolve, reject) {
  let obj = { firstName: "Leandro", lastName: "Tk", age: 23 }
  let found = true

  if (found) {
    resolve(obj)
  } else {
    reject(new Error(obj))
  }
})

promise.then(function(response) {
  console.log("Success!", response)
}, function(error) {
  console.log("Failed!", error)
})

let promise = new Promise(function(resolve, reject) {
  let obj = { firstName: "Leandro", lastName: "Tk", age: 23 }
  let found = false

  if (found) {
    resolve(obj)
  } else {
    reject(new Error(obj))
  }
})

promise.then(function(response) {
  console.log("Success!", response)
}, function(error) {
  console.log("Failed!", error)
})

let promise = new Promise((resolve, reject) => {
  let obj = { firstName: "Leandro", lastName: "Tk", age: 23 }
  let found = false

  if (found) {
    resolve(obj)
  } else {
    reject(new Error(obj))
  }
})

promise.then((response) => {
  console.log("Success!", response)
}).catch((error) => {
  console.log("Failed!", error)
})
