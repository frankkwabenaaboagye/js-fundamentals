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
var menu = [
    { name: "peach", price: 9 },
    { name: "fries", price: 17 },
    { name: "soy", price: 20.4 },
];
var orderQueue = [];
var addNew = function (aMenu) {
    orderQueue.push(aMenu);
};
var cashInRegister = 100;
var placeOrder = function (menuName) {
    var ans = {};
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].name === menuName) {
            ans = { theMenu: menu[i], status: "ordered" };
            // add to the price
            cashInRegister += menu[i].price;
            orderQueue.push(ans);
            break;
        }
    }
    return ans;
};
var placeOrder2 = function (menuName) {
    var ans = {};
    var menuObj = menu.find(function (obj) { return obj.name === menuName; });
    cashInRegister += menuObj.price;
    ans = { theMenu: menuObj, status: "ordered" };
    orderQueue.push(ans);
    return ans;
};
var ruby = {
    name: "Ruby",
    age: 12
};
function updatePerson(aPerson) {
    aPerson.name = "default name";
    return aPerson;
}
// what we pass into this a Person, but the property age... will not be there
function tryingOutOmit(aPerson) {
    // do whatever we want
}
// if we want to omit more things
function tryingOutOmit2(aPerson) {
    // do whatever we want
}
var ab = { name: "Ab" };
tryingOutOmit(ab);
// const allPersons: Person[] = [ruby];
//
// var ans = updatePerson(ruby)
// console.log(ans);
// spread in js
// const theVar = {...ruby}
// console.log(theVar)
// -------------------------
// Generics
/*
say we want to return the last item of any array, it
could be a string arr, number arr, e.t.c.
 */
var ages = [3, 6, 7];
var names = ["sam", 'peter'];
function getLastItem(anyArray) {
    return anyArray[anyArray.length - 1];
}
console.log("generics => ", getLastItem(ages));
console.log("generics => ", getLastItem(names));
