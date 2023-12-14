/*function multiply(Num1,Num2){
    let resultat = 0
    if (Num1 == 0 | Num2== 0){
        return 0
    }else if(Num1 == 1){
        return Num2;
    } else if(Num1 > 1){
    return Num2 + multiply(Num1 -1 , Num2)
    }else if (Num1 < 0){
        while (Num1 < 0){
           resultat =  resultat + Num2
           Num1 = Num1 + 1
        }
        resultat = "-" + resultat
        return Number(resultat)
    }else if(Num1 < 0 | Num2 < 0){
        Num1 = -Num1
        Num2 = -Num2
        return Num2 + multiply(Num1 -1 , Num2)

    } else throw "Not a number"
}*/
function multiply(a, b) {
    let res = 0;
    
    if(b<=0){
      b=-b;
      a=-a;
    }

    for(let i=1; i<=b; i++){
      res += a;
    }
    return res;
}

function divide(a, b){
    let quotient = 0
    if (b >= 0 & a > 0 | b <= 0 & a < 0){
        if (a < 0){
            a = -a
        }
        if (b < 0){
            b = -b
        }
        while (a >= b)
        {
            a = a - b;
            quotient = quotient+1;     
        }
        return quotient;
    }else if (a < 0 | b < 0){
        if (a < 0){
            a = -a
        }
        if (b < 0){
            b = -b
        }
        while (a >= b)
        {
            a = a - b;
            quotient = quotient+1;     
        }
        quotient = "-"+quotient
        return Number(quotient)
    } else {
        return
    }
}
function modulo(a,b) {
    let kenny = divide(a,b); 
    let zebi = multiply(kenny,b)
    let quentinfakegomuscu = a - zebi
    return quentinfakegomuscu
}
//console.log(modulo(123,-22))