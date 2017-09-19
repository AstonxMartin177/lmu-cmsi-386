**CMSI 386** Interaction Design, Fall 2017

# Homework 1
## Supported Commands
### change()
-A function that accepts a number of U.S. cents and returns an array containing, respectively, the smallest number of U.S. quarters, dimes, nickels, and pennies that equal the given amount.
### stripQuotes()
-A function that accepts a string and returns a new string equivalent to the argument but with all apostrophes and double quotes removed. 
### scramble()
-A function that randomly permutes a string. What does random mean? It means that each time you call the function for a given argument, all possible permutations are equally likely. Random is not the same as arbitrary. 
### power(int:base, int:max, p => console.log(p))
-A function that yields successive powers of a base starting at 1 and going up to some limit. Consume the values with a callback. 
### const p = powersGenerator(int:base, int:max)
p.next()
-A JavaScript generator function that yields successive powers of a base starting at 1 and going up to some limit.
### say(string:'')(string:'')(string:'')();
-A “chainable” function that accepts one string per call, but when called without arguments, returns the words previously passed, in order, separated by a single space. 
###interleave([string:'', string:''], primative:)
-A function that interleaves an array with a bunch of values. If the array length is not the same as the number of values to interleave, the “extra” elements should end up at the end of the result. 
### c = cylinder({radius: int, height: int})
c.surfaceArea()
c.volume()
c.radius
c.height
c.widen(int)
c.toString()
c.stretch(50)
c.toString()
c.radius
c.radius = int
c.radius
-A function that creates a cylinder object in the “Crockford Classless” style. Both the radius and height should default to 1 if not passed in. Include volume and surface area methods, as well as a widen method that mutates the radius by a given factor and a stretch method to grow the height. Expose the radius and height via getters. 
### const [encrypt, decrypt] = makeCryptoFunctions(cryptoKey:'', cryptoAlgorithm:'')
encrypt(string:'')
decrypt(decryptString:'')
-A function that accepts two arguments: a crypto key and a crypto algorithm, and returns an array of two functions that use the key and algorithm. The first returned function is an encryption function that turns a string into a hex string, and the second is a decryption function that turns the hex string into a string. Use the built-in Node crypto module. 
### randomName({gender: '', region: ''}).then(s => console.log(s))
- Returns a randomName using uinames API