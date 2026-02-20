/*
reverse a string and check for palindromes in JavaScript by manipulating strings and 
using conditional logic.
 */

function revstr(text) {
    let text_length= text.length
    let reverse_text = ''
    let text_tochar = text.split('')
    for (i=text_length-1;i>=0;i--){
        reverse_text=reverse_text + text_tochar[i]
        }
        if (text===reverse_text){
            return true
        }
        else return false
        
    }

revstr(process.argv[2])? console.log("Given String is Palindrome"):console.log("Given String is not Palindrome");
