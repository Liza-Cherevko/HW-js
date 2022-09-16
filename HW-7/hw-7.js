

// function createCalculator(somevalue) {
//     let secondValue = 0;
//         return {
//             add: (secondValue) => somevalue + secondValue,
//             sub: (secondValue) =>  somevalue - secondValue,
//             mult: (secondValue) => somevalue * secondValue,
//             div: (secondValue) => somevalue / secondValue,
//             set: (newValue) => newValue+(somevalue = 0)
//         }
    
// };

function createCalculator(result) {
    return {
        add: (val) => result + val, 
        sub: (val) => result - val,
        mul: (val) => result * val,
        div: (val) => result / val,
        set: (val) =>result =  val,
        sum: function (...args) {
            result = result + args.reduce((pre, val) => {
              return pre+ val;
            }, 0);
            return result;
          },
    }

}


let calc = createCalculator(100)
