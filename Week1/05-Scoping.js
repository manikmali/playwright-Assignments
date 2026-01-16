var gender = 'female'

function printGender()
{
    var age = 40;
    let color = 'brown'
    if (gender==='female') {
        var age = 30;
        let color = 'pink'
        console.log("Color inside the if block is ", color);
        console.log("Inside the if block the age value is " +age);

    }
    console.log("Color outside the if block is ", color);
    console.log("Outside the if block but within function the age value is " +age);
    
}

console.log("Gender is " +gender);
printGender()
console.log("--------------");
var gender = 'male'
printGender()
console.log("Gender is " +gender);


