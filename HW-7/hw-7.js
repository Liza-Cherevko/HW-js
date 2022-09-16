

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
    
        add: function (val) {
            result = result + val;
            return result;
          },
          sub: function (val) {
            result = result - val;
            return result;
          },
        mul: function (val) {
            result = result * val;
            return result;
        },
        div: function (val) {
            result = result / val;
            return result;
        },
        set: function (val) {
            result =  val;
            return result;
        },
        sum: function (...args) {
            result = result + args.reduce((pre, val) => {
              return pre+ val;
            }, 0);
            return result;
          },
    }

}


let calc = createCalculator(100)
