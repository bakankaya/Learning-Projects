// Caesars Cipher
/*
This is another freeCodeCamp challenge,
Right now it only works for the rotation 13(the one they asked for)
But the function can take a variable to rotate over alphabet

Another thing to improve is to encrypt the string, right now it only decodes

*/


function rot13(str) {
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
      ];
    let strArr = [...(str.toUpperCase())]; //till now, just made an array, contains all chars
    let result ="";
    for(let i=0; i<strArr.length; i++){  
        let x = alphabet.indexOf(strArr[i]); //find every item of strARR in alphabet
        if (alphabet[x] == undefined){
            result += strArr[i]; //if not in alphabet, pass it as it is
        } else if(x-13 == -1){
            result += alphabet[25];        
        } else if(x-13 < -1){
            let y = Math.abs(x-13);
            result += alphabet[alphabet.length -y];
        } else {
            result += alphabet[x -13]; 
        }
    };
    console.log(result);
};

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
