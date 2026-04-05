function removeFromArray(a, ...b) {
    return a.filter(num => !b.includes(num))
}

// Do not edit below this line
module.exports = removeFromArray;
