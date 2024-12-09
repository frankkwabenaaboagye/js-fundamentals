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

- methods in objects

```js
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

ES6 (you can remove the ":")
 const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};


```
- Objects are passed by reference.
- iterating Objects

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

- Advanced Objects
- Avoid using arrow functions when using this in a method!

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

```

- getter
```js
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,

  get energyLevel() { // getter method
    if(typeof this._energyLevel === "number"){
      return `My current energy level is ${this._energyLevel}`
    }
    else{
      return 'System malfunction: cannot retrieve energy level';
    }
  }
  
};

console.log(robot.energyLevel)


```

- setter
```js

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

// usage
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age


//---

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }

  }
  
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors)



```


