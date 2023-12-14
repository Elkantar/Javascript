/*function addWeek(date){
    var year = date.getFullYear()
    let daycountyear = Math.floor(365.25 * (year - 1))
    var month = date.getMonth()
    let daycountmonth = 0
    let dd = date.getDate();
    let verif
    let mod
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
    if (year !== '0001' || month !== '01' || Number(dd) <= 14){
        verif = dd - 1
        mod = (daycountyear + daycountmonth + verif)%14
    } else{
        verif = dd
        mod = dd
    }
    console.log(daycountyear + daycountmonth)
    console.log(mod)
    let dates
    

    if (mod == '01' || mod == '08'){
        if(mod != '8'){
        dates = 'Monday'
        } else {
            dates = 'secondMonday'
        }
    } else if (mod == '02' || mod == '09'){
        if (mod != '09'){
        dates = 'Tuesday'
        } else {
            dates = 'secondTuesday'
        }
    } else if (mod == '03' || mod == '10'){
        if (mod != '10'){
            dates = 'Wednesday'
        } else {
            dates = 'secondWednesday'
        }
    } else if (mod == '04' || mod == '11'){
        if (mod != '11'){
            dates = 'Thursday'
        } else {
            dates = 'secondThursday'
        }
    } else if (mod == '05' || mod == '12'){
        if (mod == '05'){
            dates = 'Friday'
        } else {
            dates = 'secondFriday'
        }
    } else if (mod == '06' || mod == '13'){
        if (mod == '06'){
            dates = 'Saturday'
        } else {
            dates = 'secondSaturday'
        }
    } else if (mod == '07' || mod == '14' || mod == '00'){
        if(mod == '07'){
        dates = 'Sunday'
        } else {
            dates = 'secondSunday'
        }
    }
    return dates
}

function timeTravel(){


}
*/

function addWeek(date){
    let day0 = new Date('0001-01-01')
    function diffDates(day_one, day_two) {
        return ((day_one-day_two) / (60 * 60 * 24 * 1000))/7
    }
    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }
    let diff = diffDates(date,day0)%2
    if(diff%2===0||diff<1){
        return getWeekDay(date)
    }
    else {
        let day = getWeekDay(date)
        return 'second'+day
    }
}
function timeTravel({date,hour,minute,second}){
   date.setHours(hour)
   date.setMinutes(minute)
   date.setSeconds(second)
   return date
}

console.log(addWeek(new Date (('2025-08-01'))))
console.log(addWeek(new Date (('2025-01-01'))))