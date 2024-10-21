/*
Primitive type = string, number, boolean
others: Array

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
placeOrder2("soy");
console.log(orderQueue);