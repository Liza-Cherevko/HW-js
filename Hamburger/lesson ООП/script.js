
class Hamburger {
  static  SIZE_SMALL= { price: 50, callories: 20};
  static SIZE_AVARAGE = { price: 75, callories: 30 };
  static SIZE_LARGE= { price: 100, callories: 50};
  static TOPPING_CHEESE= { price: 10, callories: 20};
  static TOPPING_SALAD= {price: 20, callories: 5};
  static TOPPING_POTATO= { price: 15, callories: 10};
  static TOPPING_MAYO={ price: 20, callories: 5};
  static TOPPING_SPICE = { price: 15, callories: 0 };
    
    #toppings = [];
    #size = null;
    get price() {
        return this.#toppings.reduce((acc, { price }) => (acc += price), this.#size.price);
    }
    get callories() {
        return this.#toppings.reduce((acc, { callories }) => (acc += callories), this.#size.callories);
    }
    constructor(size) {
        this.#size = size;
    }
    addTopping(topping) {
   this.#toppings.push(topping)
    }
    // getPrice() {
    //     console.log('Hamburger price')
    //     return this.#toppings.reduce((acc, { price }) => (acc += price), this.#size.price);
    // }
    // getCallories() {
    //     return this.#toppings.reduce((acc, { callories }) => (acc += callories), this.#size.callories);
    // }
}


class Superburger extends Hamburger {
    isSupper = true;
    constructor(size, topping) {
        super(size)
       this.addTopping(topping)
    }
    // getPrice() {
    //     console.log('Superburger price')
         
    //     return super.getPrice() * 1.1;
    // }
    get price(){
   return super.price *1.1
    }
}

const burger = new Superburger(Hamburger.SIZE_LARGE,Hamburger.TOPPING_MAYO )


const ham = new Hamburger(Hamburger.SIZE_LARGE);
ham.addTopping(Hamburger.TOPPING_MAYO);
ham.addTopping( Hamburger.TOPPING_SALAD);

// get/set
class Person { 
    #firstName = '';
    #serName = '';
    get name() { 
     return   this.#firstName + ' '+ this.#serName
    }
    set name(newName) { 
        const [firstName,serName ] = newName.split(' ');
        if (!serName) { 
            return;
        } 
        this.#firstName = firstName;
        this.#serName = serName;
    }
    constructor(firstName, serName) { 
        this.#firstName = firstName;
        this.#serName = serName;
    }
}

const alex = new Person ('Alex', 'Smith')