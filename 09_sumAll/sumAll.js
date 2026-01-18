const sumAll = function(num1, num2) {
    // loop from start number up to end number to create an array 
    // sum all the elements of the array using reduce 
    let array = [];
    let endNumber;
    let startNumber;

    // return `ERROR` if non-integer input 
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"; 

    // return `ERROR` if negative input 
    if (num1 < 0 || num2 < 0) return "ERROR";

    // begins with the larger number first 
    if (num1 > num2) {
        endNumber = num1;
        startNumber = num2;
    } else {
        endNumber = num2;
        startNumber = num1;
    }
    
    for (let i = endNumber; i >= startNumber;  i--) {
        array.push(i);
    }

    return array.reduce((acc, num) => acc + num, 0);
};

// Do not edit below this line
module.exports = sumAll;
