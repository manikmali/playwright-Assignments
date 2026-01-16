/*
Assignment Details: 
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
number is odd and `"Even"` if the number is even. 
*/

function isOddOrEven(num) {
if (num % 2 === 0 ) {
 output = "Given number is Even";
 
}
else {
output = "Given number is Odd";
    
}
return output
}

console.log(isOddOrEven(23))    // odd
console.log(isOddOrEven(24))    // even
console.log(isOddOrEven(9))     // odd