// Caesars Cipher

let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];
let g = -12
console.log(alphabet.length -g);

function rot13(str) {
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
        //    let x = alphabet.indexOf(strArr[i]);
            result += alphabet[x -13]; //This needs to be done with loop to reach 13
        }
    };
    console.log(result);
};

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

// function yar(aha){
//     let s ="";
//     for(let i=0; i<aha;i++){
//         s += "nah"
//     }
//     console.log(s);
// }

// yar(3);