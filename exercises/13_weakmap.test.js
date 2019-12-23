test('has a set method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  // Create a new WeakMap called 'myMap'
  const myMap = new WeakMap()
  myMap.set(key, value)
  // Add a new entry. Use key as the key and values as the value
  expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
  // If you make it this far, write a class with private member variables, using WeakMaps
  class Person {
    const privateMap = new WeakMap()
    constructor(name, age) {
      privateMap.set(this, { name, age })
    }

    getName() {
      return privateMap.get(this).name
    }

    getAge() {
      return privateMap.get(this).age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=WeakMaps&em=
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
 * 1. A WeakMap is a map (dictionary) where the keys are weak - that is, if all references to the key are lost and there are no more references to the value - the value can be garbage collected.
 * 2. There are no ways to enumerate a weak map or to get all its values. In a weak map, you can store the data based on a key and when the key gets garbage collected so do the values.
 * 3. A very good pattern to declare private instance variable. See the second test for an example.
 */