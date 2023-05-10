// FCC Telephone Number Validator project

function telephoneCheck(str){
    let arr = [...str];
    let reg = /[^0-9\s()-]/g.exec(str);
    let reg2 = /[0-9()-]/g;
    if (reg){return false}
    else if (arr.includes("(")== true && arr.includes(")")==false ||
             arr.includes(")")== true && arr.includes("(")==false){return false}
    else if(9 >= arr.length || arr.length > 16 ){return false}
    else if(reg2[0]=="1" && reg2[1]!=="("){return false}
    else return true;

}

telephoneCheck("1-555, abc");

//So far is what I had done, below her is the solution I found;

let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }


