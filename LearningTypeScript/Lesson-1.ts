/*
Primitive type = string, number, boolean

Create your own type:
    - by conversion start with a lowercase letter
    - do this around objects

                type Person = {
                    name: string,
                    age: number,
                    isSingle: boolean
                    address: {
                        country: string
                    }
                }

                let paul: Person = {
                    name: "Paul",
                    age: 35,
                    isSingle: false
                    address: {
                        country: "Singapore"
                    }
                }

* */


type SingleMenu = {
    name: string,
    price: number
}

type Menu =

const menu = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
    {name: "soy", price: 20.4},
];

const orderQueue = [];

const addNew = (aMenu: SingleMenu) => {
    orderQueue.push(aMenu);
}

let cashInRegister = 100;

const placeOrder = (menuName) => {
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

const placeOrder2 = (menuName) => {
    let ans  = {}
    let menuObj =  menu.find((obj: SingleMenu)=> obj.name === menuName)
    cashInRegister += menuObj.price;
    ans  = {theMenu: menuObj, status: "ordered"  }
    orderQueue.push(ans);
    return ans;
}


placeOrder2("soy");

console.log(orderQueue);

