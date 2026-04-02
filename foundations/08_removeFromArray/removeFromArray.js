const removeFromArray = function(arr, ...args) {
    return arr.filter(z => !args.includes(z));
};

// Do not edit below this line
module.exports = removeFromArray;
