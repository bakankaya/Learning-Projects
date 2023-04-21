// Palindrome Checker

/* 
Takes strings as variable, removes whitespace and symbols, 
converts all chars to lowercase and makes an array,
then compares this array with its revesed version.
*/

function palindrome(str){
    let x = str.toLowerCase();
    let regx = /[a-z0-9]/g;
    let arr = x.match(regx);
    if (arr.toString() === arr.reverse().toString()){ 
        return true;
    } else {
        return false;
    };
};



