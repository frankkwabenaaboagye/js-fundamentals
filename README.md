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

- Factory Function
 - A factory function is a function that returns an object and can be reused to make multiple object instances

```js

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

// usage
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

With monsterFactory in place, we don’t have to create an object
literal every time we need a new monster


const robotFactory = (model,mobile) => {

  return {
    model: model,
    mobile: mobile,
    beep: () => {
      console.log('Beep Boop');
    }
  }

};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

```

- property value shorthand

```js
/*

destructuring technique, called property value shorthand,
to save ourselves some keystrokes


const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

to

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};


*/
```

- a destructuring technique called destructured assignment
- create a variable with the name of an object’s key
- that is wrapped in curly braces { } and assign to it the object.
```js

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};


const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'


const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

// ----


const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};


const {functionality} = robot;

functionality.beep();
```

- built in

```js
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);
```


-  iterators
  - fnx as data
```js
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

console.log(isTwoPlusTwo.name); // logs checkThatTwoPlusTwoEqualsFourAMillionTimes
```

- functions can accept other functions as parameters
- A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
- We call functions that get passed in as parameters callback functions.
- With callback functions, we pass in the function itself by typing the function name without the parentheses

```js

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);


// you can pass in anonymous fnx as well

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});


```





















