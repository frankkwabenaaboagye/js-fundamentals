
/*
A restaurant has hired you to create a function for their website that allows 
them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who 
uses the new function can generate a meal and a price for Today’s Special without any 
embarrassing errors!

*/



const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck){
    if(typeof mealToCheck == 'string'){
      this._meal = mealToCheck;
      return this._meal;
    }
  },

  set price(priceToCheck){
    if(typeof priceToCheck == 'number'){
      this._price = priceToCheck;
      return this._price;
    }
  },

  get todaysSpecial(){
    if((typeof this._meal == 'string') && (typeof this._price == 'number')){
      return `Today's Special is ${this._meal} for \$${this._price}!`
    }else{
      return 'Meal or price was not set correctly!';
    }

  }


}


menu.meal = 'Banku';
menu.price = 100;

console.log(menu.todaysSpecial);









