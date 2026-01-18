const removeFromArray = function(array, ...valuesToRemove) {
    return array.filter(number => !valuesToRemove.includes(number))
};

// Do not edit below this line
module.exports = removeFromArray;
