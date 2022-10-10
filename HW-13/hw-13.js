// мой вариант


function Hamburger(size) {
 this.size = size;
 this.toppings =[];
}
Hamburger.SIZE_SMALL= { price: 50, callories: 20};
Hamburger.SIZE_AVARAGE= { price: 75, callories: 30 };
Hamburger.SIZE_LARGE= { price: 100, callories: 50};
Hamburger.TOPPING_CHEESE= { price: 10, callories: 20};
Hamburger.TOPPING_SALAD= {price: 20, callories: 5};
Hamburger.TOPPING_POTATO= { price: 15, callories: 10};
Hamburger.TOPPING_MAYO={ price: 20, callories: 5};
Hamburger.TOPPING_SPICE = { price: 15, callories: 0 };

Hamburger.prototype.addTopping = function (topping) {
   this.toppings.push(topping)
};

Hamburger.prototype.getPrice = function () {
 return  this.toppings.reduce((acc, {price})=> (acc+=price),this.size.price )

};

Hamburger.prototype.getCallories = function () {
  return this.toppings.reduce((acc, { callories}) => (acc+=callories), this.size.callories);
}

let ham = new Hamburger(Hamburger.SIZE_LARGE);

ham.addTopping(Hamburger.TOPPING_MAYO);
ham.addTopping( Hamburger.TOPPING_SALAD);

console.log('Current price:'+ ham.getPrice());
console.log('Current callories:'+ ham.getCallories());



// первый вариант решения
// const SIZE_SMALL = { price: 50, callories: 20 };
// const SIZE_BIG = { price: 100, callories: 50 };
// const TOPPING_MAYO = { price: 20, callories: 5000 };
// const TOPPING_KETCHUP = { price: 30, callories: 500 };


// function Hamburger({ price, callories}) {
//   this._price = price;
//   this._callories = callories;
// }

// Hamburger.prototype.addTopping = function ({ price, callories }) {
//   this._price += price;
//   this._callories += callories;
// }

// Hamburger.prototype.getPrice = function () {
//   return this._price;
// }
// Hamburger.prototype.getCallories = function () {
//   return this._callories;
// }

// const ham = new Hamburger(SIZE_BIG)




// второй вариант решения

// function Hamburger(size ) {
//   this._size = size;
//   this._toppings = [];
//   this._price = size.price;
//   this._callories = size.calloriesce;
// }
// Hamburger.SIZE_SMALL= { price: 50, callories: 20};
// Hamburger.SIZE_AVARAGE= { price: 75, callories: 30 };
// Hamburger.SIZE_LARGE= { price: 100, callories: 50};
// Hamburger.TOPPING_CHEESE= { price: 10, callories: 20};
// Hamburger.TOPPING_SALAD= {price: 20, callories: 5};
// Hamburger.TOPPING_POTATO= { price: 15, callories: 10};
// Hamburger.TOPPING_MAYO={ price: 20, callories: 5};
// Hamburger.TOPPING_SPICE = { price: 15, callories: 0 };

// Hamburger.prototype.addTopping = function (topping) {
//   this._toppings.push(topping)
//   this._recalculate();
// }

// Hamburger.prototype._recalculate = function () { 
//   this._price =  this._toppings.reduce((acc, { price}) => (acc+=price), this._size.price);
//   this._callories =this._toppings.reduce((acc, { callories}) => (acc+=callories), this._size.callories);
// }

// Hamburger.prototype.getPrice = function () {
//   // let price = 0;
//   // price = +this._size.price;
//   // this._toppings.forEach((topping) => (price += topping.price));
//   // return this._toppings.reduce((acc, { price}) => (acc+=price), this._size.price);
//   return this._price;
 

// }
// Hamburger.prototype.getCallories = function () {
//   // return this._toppings.reduce((acc, { callories}) => (acc+=callories), this._size.callories);
//   return this._callories;
// }

// const ham = new Hamburger(Hamburger.SIZE_LARGE)
// ham.addTopping(Hamburger.TOPPING_MAYO)