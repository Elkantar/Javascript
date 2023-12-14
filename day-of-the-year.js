function  dayOfTheYear(date){
    let month = date.getMonth()+1
    let day = date.getDate()
    //console.log(day)
    let daycountmonth = 0
    for (let i = 1; i < month; i++){
        if (i == 1 || i == 3|| i == 5|| i == 7|| i == 8 || i == 10 || i == 12){
            daycountmonth += 31
        } else if (month == 2){
            if (year % 4 !== 0){
                daycountmonth += 28
            } else {
                daycountmonth += 29
            }
        } else {
            daycountmonth += 30
        }
    }
   // console.log(String(date))
    let date2 = new Date('0001-01-01')
    //console.log(day)
    if (date - date2 == 0 ){
        return daycountmonth + day
    }else {
        return daycountmonth + day  - 1
    }
}

console.log(dayOfTheYear(new Date('1664-08-09')))
console.log(dayOfTheYear(new Date('0001-01-01')))