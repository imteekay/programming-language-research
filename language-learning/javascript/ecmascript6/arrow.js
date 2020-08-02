// expression bodies
let evens = [2, 4, 6, 8, 10]

let odds = evens.map(v => v + 1)

for (let odd of odds)
  console.log(odd)

// statement bodies
let numbers = [1, 2, 3, 4, 5, 6, 10]
let canBeDividedByFive = []

numbers.forEach((num) => {
  console.log(num)

  if (num % 5 == 0) {
    canBeDividedByFive.push(num)
  }
})

canBeDividedByFive.forEach((num) => {
  console.log(num)
})

// lexical this
let namespace = {}

namespace.klass = function(one, two) {
  this.ar1 = []
  this.ar2 = []
  this.ar1.push(one)
  this.ar1.push(two)
}

namespace.klass.prototype.message = function() {
  this.ar1.forEach((num) => {
    if (num == 1) {
      this.ar2.push(num) // this "this" is the object --> lexical this!
    }
  })

  this.ar2.forEach((num) => {
    console.log(num)
  })
}

let instance = new namespace.klass(1, 2)
instance.message()
