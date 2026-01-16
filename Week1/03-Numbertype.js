/*
Assignment Details: 
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
corresponding string indicating the type. 
*/

function numbertype(num) {
if (num>0){ return result = "Positive"}
else if (num<0) {return result = "Negative"}
else {return result = "Zero"}
}

console.log("Given number type is ", numbertype(1));    // Positive
console.log("Given number type is ", numbertype(0));    // Zer
console.log("Given number type is ", numbertype(-12));  // Negative