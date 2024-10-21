const menu = [
    {name: "peach", price: 9},
    {name: "fries", price: 17},
    {name: "soy", price: 20.4},
];

const orderQueue = [];

const addNew = (aMenu) => {
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
    let menuObj =  menu.find((obj)=> obj.name === menuName)
    cashInRegister += menuObj.price;
    ans  = {theMenu: menuObj, status: "ordered"  }
    orderQueue.push(ans);
    return ans;
}


placeOrder2("soy");

console.log(orderQueue);

