test('has a constructor for initialization', () => {
  // Create an Animal class
  // Add a constructor that takes one param, the name.
  // Set this.name to the name passed in
  class Animal {
    constructor(name) {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  // Create an Animal class with a constructor
  // Make your class default (using default params) the name to 'Honey Badger'
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  // Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('can have static methods', () => {
  // Create an Animal class, pass in the name to the constructor,
  // and add a create method that takes a name and returns an instance
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
    static create(name) {
      return new Animal(name)
    }
  }

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  // Create an Animal class
  // Create a Dog class that extends Animal
  // Add sayName to Dog
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }
  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('can use property setters and getters', () => {
  // Create an Animal class (don't pass name into constructor)
  // Add property setter for name
  // Add property getter for name
  class Animal {
    constructor(name = 'Honey Badger') {
      this._name = name
    }

    get name() {
      return `${this._name} type of animal`
    }

    set name(newName) {
      this._name = newName
    }
  }

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Classes&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing

/**
 * 1. Javascript class supports static method.
 * 2. Javascript class supports property getter and setter method.
 * 3. If subclass's constructor does nothing more than calling superclass's constructor,
 *    we don't need to write the constructor.
 * */