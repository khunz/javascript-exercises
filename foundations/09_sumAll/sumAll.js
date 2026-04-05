function sumAll(num1, num2) {
    // Input validation 
    if (typeof num1 !== "number" || typeof num2 !== "number" ) return 'ERROR'
    if (num1 < 0 || num2 < 0) return 'ERROR'
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
   
    
    let result = 0
    if (num1 > num2) [num1, num2] = [num2, num1]
    for (let i = num1; i <= num2; i++) {
        result += i
    }
    return result
}


// Do not edit below this line
module.exports = sumAll;
