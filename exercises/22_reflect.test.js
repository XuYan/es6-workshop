test('Reflect.apply can be used to call a function', () => {
  const person = {
    name: 'Fred',
    sayHi(greeting, noun) {
      return `${greeting} ${noun}! My name is ${this.name}`
    },
  }

  const result = Reflect.apply(person.sayHi, person, [ 'Hey there', 'Jaimee' ])
  expect(result).toBe('Hey there Jaimee! My name is Fred')
})

test('Reflect.deleteProperty can be used instead of the `delete` keyword', () => {
  const person = {name: 'Joan', age: 56}
  Reflect.defineProperty(person, 'protected', {
    configurable: false,
    value: 'YOU CANNOT GET RID OF ME!',
  })
  // use Reflect.deleteProperty to delete the age property from the person object
  const ageDeleted = Reflect.deleteProperty(person, 'age')
  const protectedDeleted = Reflect.deleteProperty(person, 'protected')
  expect(person.age).not.toBeDefined()
  expect(ageDeleted).toBe(true)
  expect(person.protected).toBe('YOU CANNOT GET RID OF ME!')
  expect(protectedDeleted).toBe(false)
})

test(`Reflect.ownKeys returns the object's own (not inherited) keys (including symbols)`, () => {
  const exists = Symbol('existance')
  const person = {human: true, [exists]: true}
  const favoriteFeature = Symbol('Fav Feat')
  const kyle = {
    __proto__: person,
    awesome: true,
    [favoriteFeature]: 'destructuring',
  }
  Reflect.defineProperty(kyle, 'favoriteLanguage', {
    value: 'JS',
    configurable: false,
    enumerable: false,
  })
  // hint, the keys will be in the order that they're added to the object
  // this will be the case for most environments, though it's generally not
  // a good idea to rely on this fact as it's not specified in the spec.
  expect(Object.keys(kyle)).toEqual([
    'awesome',
  ])
  expect(Object.getOwnPropertyNames(kyle)).toEqual([
    'awesome',
    'favoriteLanguage',
  ])
  expect(Object.getOwnPropertySymbols(kyle)).toEqual([
    favoriteFeature
  ])
  expect(Reflect.ownKeys(kyle)).toEqual([
    'awesome',
    favoriteFeature,
    'favoriteLanguage',
  ])
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Reflect&em=
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
 * 1. Refer to this document to learn more about reflect:
 * http://es6.ruanyifeng.com/#docs/reflect
 * 2. The range of things returned:
 *    Reflect.ownKeys(obj) === Object.getOwnPropertyNames(obj) + Object.getOwnPropertySymbols(obj) >= Object.keys(obj)
 */