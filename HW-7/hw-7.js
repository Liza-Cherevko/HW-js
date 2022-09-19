



function createCalculator(result) {
    return {
        add: (val) => result += val, 
        sub: (val) => result -= val,
        mul: (val) => result *= val,
        div: (val) => result /= val,
        set: (val) =>result =  val,
    
    }

}


let calc = createCalculator(100)
