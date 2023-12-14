/*function isLeapYear(date){
    const years = date;
    let ret =  false
    if(years%100===0){
        ret = false
    }

    if (years%4 === 0){
        ret =  true
    }
    
    if (years%400 === 0){
        ret = true
    }

    return ret
}*/

function isLeapYear(data){
    const year = data;
    let flag = false
    if(year%4===0){
        flag = true
    }
    if(year%100===0){
        flag = false
    }
    if(year%400===0){
        flag =true
    }
    return flag
}

function countLeapYears(date){
    //let j = 0
    let k = 0
    let year = date.getFullYear()
    
    for (let i = year; i > 4; i-- ){
        if(isLeapYear(i)){
        k++
        }
        //console.log(k)
    }
     
    return k
}
console.log(isLeapYear(new Date('1584-01-01')))
console.log(countLeapYears(new Date('0001-12-01')) )
console.log(countLeapYears(new Date('1664-08-09')))