- Arrays
- String
- Objects


```js
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}


const username = 'joe';
for (const char of username) {
  console.log(char);
}


```

```js

let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'


If we tried to write our returnAnyProp() function with dot notation (objectName.propName)
the computer would look for a key of 'propName' on our object and not the value of the propName parameter.
```

-  we can’t reassign an object declared with const, we can still mutate it

```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

```
