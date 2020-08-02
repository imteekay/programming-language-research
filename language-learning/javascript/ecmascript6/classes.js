class Vehicle {

  // constructor
  constructor(numberOfWheels, engineType) {
    this._numberOfWheels = numberOfWheels
    this._engineType = engineType
  }

  // getters and setters
  get numberOfWheels() {
    return this._numberOfWheels
  }

  get engineType() {
    return this._engineType
  }

  set numberOfWheels(num) {
    this._numberOfWheels = num
  }

  set engineType(type) {
    this._engineType = type
  }

}

// inheritance
class Car extends Vehicle {

  constructor(numberOfWheels, engineType, fabricationYear) {
    super(numberOfWheels, engineType)
    this._fabricationYear = fabricationYear
  }

}

let car = new Car(4, "gasoline", 2015)
console.log(car.engineType)

// ---------------------------------------------------------------------------------------

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Developer extends Person {
  constructor(name, age, ...languages) {
    super(name, age)
    this.languages = [...languages]
  }

  printLanguages() {
    this.languages.forEach((language) => {
      console.log(language)
    })
  }
}

let dev = new Developer("Leandro", 23, "Ruby", "JS")
dev.printLanguages()
