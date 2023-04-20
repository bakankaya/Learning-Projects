// Palindrome Checker

/* 
TO DO: 
-Regex
-toLowercase
-reverse string
*/

function palindrome(str){
    let x = str.toLowerCase();
    let regx = /[a-z]/g;
    let arr = x.match(regx);
    let arr2 = arr.reverse();
    if (arr == arr2){
        console.log('yah'); 
        return true;
    } else {
        console.log('nah');
        return false;
    };
};



palindrome("not a palindrome");


let x = "yahu nedir bu";
let arr = [...x];
let arr2 = arr.reverse();

console.log(arr);
console.log(arr2);