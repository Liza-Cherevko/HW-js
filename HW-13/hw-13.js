
 Hamburger.SIZE_SMALL= { price: 50, callories: 20};
 Hamburger.SIZE_AVARAGE= { price: 75, callories: 30 };
 Hamburger.SIZE_LARGE= { price: 100, callories: 50};
 Hamburger.TOPPING_CHEESE= { price: 10, callories: 20};
 Hamburger.TOPPING_SALAD= {price: 20, callories: 5};
 Hamburger.TOPPING_POTATO= { price: 15, callories: 10};
 Hamburger.TOPPING_MAYO={ price: 20, callories: 5};
 Hamburger.TOPPING_SPICE={ price: 15, callories: 0};



function Hamburger(size) {
 this.size = size;
 this.topping =[]; 
}
 
Hamburger.prototype.addTopping = function (topping) {
   this.topping.push(topping)
};


Hamburger.prototype.getPrice = function () {
   let price = this.size.price;
  this.topping.reduce(function(sum, current){
    return sum+current.price
  })
  return price;
};

Hamburger.prototype.getCallories = function () {
    let callories = this.size.callories;
    this.topping.reduce(function(sum, current){
      return sum+current.callories
    })
    return callories;
};

let ham = new Hamburger(Hamburger.SIZE_LARGE);
ham.addTopping(Hamburger.TOPPING_MAYO);
ham.addTopping( Hamburger.TOPPING_SALAD);

console.log('Current price:'+ ham.getPrice());
console.log('Current callories:'+ ham.getCallories());





// замикання
// function userBilder(name, age){
//   let user = {name, age};
//   return{
//       getName(){
//           return user.name
//       },
//       getAge(){
//              return user.age
//       },
//   }
// }

// let builder = userBilder('Liza', 22)


// конструктор, prototype call apply bind
// function User(name, age, status,wifeName,wifeAge){
//   this.name = name;
//   this.age = age;
//   this.status = status;
//   this.wife = {name: wifeName, age:wifeAge}
//   console.log(this)
// }
// let user1 = new User('Liza', 22, true, 'anna', 22)

// function User(name, age, ){
//   this.name = name;
//   this.age = age;
//   console.log(this)
// }
// User.prototype.greeting = function() {
//  return `hi my name is ${this.name}`

// }

// let user = new User('Liza', 22, true, 'anna', 22)
// console.log(user.greeting())
