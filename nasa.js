function nasa(n){
    let res = '1'

for(let x = 2; x <= n; x++){
    let div3 = x
    let div5 = x
   
    for(let a;div5 > 0 && div3 > 0; a++){
        while (div3>0){
            div3 -= 3
        }
        while (div5 >0){
            div5 -= 5
        }
    }

    if (div3 == 0 && div5 !== 0){
        res += " " + "NA"
    } else if (div3 !== 0 && div5 == 0){
        res += " " +"SA" 
    } else if (div3 == 0 && div5 == 0){
        res += " " + "NASA"
    }else if (x != 0) {
        res += " " + x
    } else {
        res += x
    }
}
return res

}

console.log(nasa(15))