function randomInteger(min, max){
    let rand = min + Math.random()*(max+1-min)
    return Math.floor(rand)
}

let s1 = 0; 

function moneyRecursion(){
    let m = randomInteger(0,100)
    console.log('add: ' + m)
    s1 += m
    console.log('sum: ' + s1)
    if(s1>300) return
    moneyRecursion()
}

moneyRecursion()