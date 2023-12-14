function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function matchCron(str, date){
    let month = date.getMonth() +1
    let day = date.getDate()
    let today = getWeekDay(date)
    let hour = date.getHours()
    let minute = date.getMinutes()
    let ret = 0
    let strsplit = str.split(" ")

    for(let i= 0; i < strsplit.length; i++){
        if(strsplit[i] != '*'){
            if(i == 0){
                if (strsplit[i] == minute){
                    //console.log(strsplit[i])
                    ret += 1
                }
            }
            if(i == 1){
                //console.log(strsplit[i])
                if (strsplit[i] == hour){
                    //console.log(hour)
                    ret += 1
                }
            }
            if(i == 2){
                if (strsplit[i] == day){
                    ret += 1
                }
            }
            if(i == 3){
                console.log(month)
                if (strsplit[i] == month){
                    ret += 1
                }
            }
            if(i == 4){
                let save 
                //console.log(today)
                if(strsplit[i] == 1){
                    save = 'Monday'
                }
                if(strsplit[i] == 2){
                    save = 'Tuesday'
                }
                if(strsplit[i] == 3){
                    save = 'Wednesday'
                }
                if(strsplit[i] == 4){
                    save = 'Thursday'
                }
                if(strsplit[i] == 5){
                    save = 'Friday'
                }
                if(strsplit[i] == 6){
                    save = 'Saturday'
                }
                if(strsplit[i] == 7){
                    save = 'Sunday'
                }
                if (save == today){
                   
                    ret += 1
                }
            }
            if (strsplit[i] == ' '){
                ret += 1
            }

        } else {
            ret += 1
        }
    }
    //console.log(ret)
    //console.log(strsplit.length)
    if(ret == strsplit.length){
        return true
    } else {
        return false
    }
}

console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')) ) //-> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))  // -> false
console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))