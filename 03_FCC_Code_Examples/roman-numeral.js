//Roman Numeral Converter

/* 
I have found many different approaches to the problem. Instead of writing a copy,
I just want to mention them here.

*/
//-----------------------------------------------------------------------------------------------------------

// 01 of 03 - As an IF-ELSE chain

//This code is contributed by Yash Agarwal(yashagarwal2852002)
// from: https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/

function intToRoman(num)
{
    // Initialize the ans string
    let ans = "";
    // calculate the roman numbers
    while(num != 0){
        if(num >= 1000){
            ans += "M";
            num -= 1000;
        }
        //check for all the corner cases like 900,400,90,40,9,4 etc.
        else if(num >= 900 && num < 1000){
            ans += "CM";
            num -= 900;
        }
        else if (num >= 500 && num < 900) {
            ans += "D";
            num -= 500;
        }
        else if (num >= 400 && num < 500) {
            ans += "CD";
            num -= 400;
        }
        else if (num >= 100 && num < 400) {
            ans += "C";
            num -= 100;
        }
        else if (num >= 90 && num < 100) {
            ans += "XC";
            num -= 90;
        }
        else if (num >= 50 && num < 90) {
            ans += "L";
            num -= 50;
        }
        else if (num >= 40 && num < 50) {
            ans += "XL";
            num -= 40;
        }
        else if (num >= 10 && num < 40) {
            ans += "X";
            num -= 10;
        }
        else if (num == 9) {
            ans += "IX";
            num -= 9;
        }
        else if (num >= 5 && num < 9) {
            ans += "V";
            num -= 5;
        }
        else if (num == 4) {
            ans += "IV";
            num -= 4;
        }
        else if (num < 4) {
            ans += "I";
            num--;
        }
    }
    // return the result
    return ans;
}

//------------------------------------------------------------------------------------------------------

// 02 of 03 - Using math.floor 

//This code is contributed by Manoj
// from: https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/

function printRoman(number)
{
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        document.write(sym[i]);
    }
    i--;
    }
}

//--------------------------------------------------------------------------------------------------

// 03 of 03 - Another Math.floor solution but a more readable/simple one

// Writer: https://gist.github.com/tomaslangkaas/9ba8f946377c0e52074e5f89d3ecf965#file-toroman8-js
//from: https://medium.com/@tomas.langkaas/eight-algorithms-for-roman-numerals-b06c83db12dd

function toRoman8(num) {
    let ones = [
          "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        tens = [
          "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"
        ],
        hundreds = [
          "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"
        ],
        thousands = [
          "", "M", "MM", "MMM"
        ];
    return thousands[Math.floor(num / 1000)] +
           hundreds[Math.floor((num % 1000) / 100)] +
           tens[Math.floor((num % 100) / 10)] +
           ones[num % 10];
  }

