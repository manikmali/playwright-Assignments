/*Given a strings consisting of words and spaces, 
return the length of the last word in the string. 
*/

function strlast(text) {
    const strsplit = text.trim().split(' ')
    let wordscount = strsplit.length
    let lastword = strsplit[wordscount-1]
    return lastword 
}

function strret(text) {
    return text.length
}


function anagram(text1, text2){
    let text1_length = text1.length
    let text2_length = text2.length
    if (text1_length!=text2_length) {   //If there any difference in length then return false in straight forward
        return false
    }
    let sorted_text1 = text1.trim().split('').sort()    //Splitting the text1 to char and sorted
    let sorted_text2 = text2.trim().split('').sort()    //Splitting the text2 to char and sorted
    for (i=0; i<text1_length; i++){
        if (sorted_text1[i] != sorted_text2[i]) {   //Checking the each characters are same
            return false
        }  
    }
    return true
}


let string = process.argv[2] // Getting string in the command line argument
let lastword = strlast(string)  //Calling the function to return the last word and assigned to a variable
console.log(`The last word is --->  ${lastword}`);
console.log(`The length of the last word is --> ${strret(lastword)}`); //Printing the returned last word length by Calling the function and assigned to a variable
anagram('listen','silent') ? console.log("Given string is anagram"):  console.log("Given string is not anagram")
anagram('hello','world')? console.log("Given string is anagram"):  console.log("Given string is not anagram")