function isFriday(date){
    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }
        let today = getWeekDay(date)
        //console.log(today)
        if(today === 'Friday'){
            return true
        } else {
            return false
        }
}

function isWeekend(date){
    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }
        let today = getWeekDay(date)
        //console.log(today)
        if(today === 'Sunday' ||today === 'Saturday'){
            return true
        } else {
            return false
        }
}

function isLeapYear(date){
    let years = date.getYear()

    if (years % 4 === 0){
        return true
    } else {
        return false
    }
}

function isLastDayOfMonth(date){
    let month = String(date.getMonth()+1)
    let day = String(date.getDate())
    //console.log(month)
    if(month == '1'||month == '3'||month == '5' ||month == '7' || month == '8'|| month ==  '10' ||month == '12'){
        //console.log(day)
        if (day == '31'){
            return true
        } else {
            return false
        }
    } else if (month == '2'){
        if (isLeapYear(date) == true){
            //console.log(day)
            if (day == '29'){
                return true
            } else {
                return false
            }
        } else {
            if (day == '28'){
                return true
            } else {
                return false
            }
        }
    } else {
        //console.log(day)
        if (day == '30'){
            return true
        } else {
            return false
        }
    }
}
console.log(isLastDayOfMonth(new Date('2020-02-29')))
console.log(isLeapYear(new Date('2020-02-29')))