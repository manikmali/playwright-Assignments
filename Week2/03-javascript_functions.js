/* The following tasks to practice function declarations, arrow functions, anonymous 
functions, and callback functions in JavaScript. */

/* Task 1: Function Declaration 
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
<name>!" to the console.  */
function userProfile(name) {
console.log(`Hello, ${name}!`);
}

userProfile("Manikandan")

/* Task 2: Arrow Function 
Create an arrow function named `double` that takes a number as a parameter and returns 
double its value. */ 

let double = (number) => number * 2
console.log(`Function returns its value as double --> ${double(10)}`);


/* Task 3: Anonymous Function 
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
after 2 seconds.  */

let funexp = function() {
console.log("Following message will be delayed by 2 seonds");

setTimeout( () => {
    console.log("Message was delayed by 2 seconds");
    
}, 2000)

}

funexp()

/* Task 4: Callback Function 
Create a function named `getUserData` that takes a callback function as a parameter. Inside 
`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with 
that should print “Call Back Function” after 3 seconds. 
Call the `getUserData` function and log message using the callback function */

function getUserData(username, details){
console.log(`Payroll details for the employee is ${username}`);

setTimeout( ()=> {
console.log("User details will be printed shortly");
}, 3000)

details() 

}
function package() {
    console.log(`Designation - Test Lead`);
    console.log(`Department - TCOE`);
    console.log(`Location - Chennai`);
    
}
getUserData('Manikandan', package)


