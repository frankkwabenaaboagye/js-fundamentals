/*
Primitive type = string, number, boolean
others: undefined, Array, any (limit its usage), void

utility types

Partial - takes the type and return a new types where all the properties are optional
    - this comes in handy if say you want to perform an update an not
        all the fields are compulsory

Omit - takes in the type and removes or omits some types we specify

Create your own type:
    - by conversion start with a lowercase letter
    - do this around objects

                // you can leave out the comma at the end - but just be consistent
                type Person = {
                    name: string,
                    age: number,
                    isSingle: boolean,
                    address: Address
                }


                type Address = {
                     country: string
                }

                let paul: Person = {
                    name: "Paul",
                    age: 35,
                    isSingle: false
                    address: {
                        country: "Singapore"
                    }
                }

    - if you want something to be optional use the ?
    e.g.

        type Person = {
                    name: string,
                    age: number,
                    isSingle: boolean,
                    address?: Address
                }
      // you can use the Person type, but the address will be optional

  - Union
    - if you want a variable to be some specific values

    type UserRole = "admin" | "user" | "client";
    const rubyRole: UserRole = "user" ; // anything apart from those 3 up there would not be best

    function add(theVal : number | string) : <put type that should be returned>{
        // then handle the case for a number and handle the case for string
    }

----------
-> you can throw new TypeError or new Error, e.t.c

-------------

// module.ts or module.js

export const menu = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
];

export function placeOrder(menuName: string) {
    // Implementation
}

export class Order {
    // Implementation
}


// main.ts or main.js

import { menu, placeOrder, Order } from './module';

----------------- or

// module.ts or module.js

const defaultMenu = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
];

export default defaultMenu;

// main.ts or main.js

import menu from './module';  // No curly braces for default import

------------- or --- you can have both
// module.ts or module.js

export const orderQueue = [];

const menu = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
];

export default menu;

// main.ts or main.js

import menu, { orderQueue } from './module';

* */


type SingleMenu = {
    name: string,
    price: number
}


const menu: Array<SingleMenu> = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
    {name: "soy", price: 20.4},
];

const orderQueue = [];

const addNew = (aMenu: SingleMenu) => {
    orderQueue.push(aMenu);
}

let cashInRegister = 100;

const placeOrder = (menuName: string) => {
    let ans  = {}
    for(let i=0; i<menu.length; i++){
        if(menu[i].name === menuName){
            ans  = {theMenu: menu[i], status: "ordered"  }
            // add to the price
            cashInRegister += menu[i].price;
            orderQueue.push(ans);
            break;
        }
    }
    return ans;
}

const placeOrder2 = (menuName: string) => {
    let ans  = {}
    const menuObj: SingleMenu =  menu.find(obj => obj.name === menuName);
    cashInRegister += menuObj.price;
    ans  = {theMenu: menuObj, status: "ordered"  }
    orderQueue.push(ans);
    return ans;
}


// placeOrder2("soy");
//
// console.log(orderQueue);

// partial
type Person = {
    name: string,
    age: number
}

var ruby: Person = {
    name: "Ruby",
    age: 12
}


function updatePerson(aPerson: Partial<Person>): Person | Partial<Person> {
    aPerson.name = "default name";

    return aPerson;

}


// what we pass into this a Person, but the property age... will not be there
function tryingOutOmit(aPerson: Omit<Person, "age">) {
    // do whatever we want
}

// if we want to omit more things

function tryingOutOmit2(aPerson: Omit<Person, "age" | "name">) {
    // do whatever we want
}

const ab = {name: "Ab"};

tryingOutOmit(ab)


// const allPersons: Person[] = [ruby];
//
// var ans = updatePerson(ruby)
// console.log(ans);


// spread in js
const theVar = {...ruby}
console.log(theVar)











