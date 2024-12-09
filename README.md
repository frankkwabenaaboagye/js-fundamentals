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
