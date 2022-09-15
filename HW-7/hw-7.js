

function createCalculator(somevalue) {
        return {
            add: (secondValue) =>  somevalue + secondValue,
            sub: (secondValue) => somevalue - secondValue,
            mult: (secondValue) => somevalue * secondValue,
            div: (secondValue) => somevalue / secondValue,
            set: (newValue) => newValue+(somevalue === 0)
        }
    
};

let calc = createCalculator(100)
