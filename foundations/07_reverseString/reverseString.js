function reverseString(str) {
    let arr = str.split('')
    let revArr = []
    for (let i = 1; i <= str.length; i++) {
        revArr.push(arr[arr.length -i])
    }
    return revArr.join('')
}

// Do not edit below this line
module.exports = reverseString;