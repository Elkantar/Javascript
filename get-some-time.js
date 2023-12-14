/*function format(date) {
  
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate()-1);
    let year = String(date.getFullYear());
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (year.length === 1) year = '000' + year;
    if (year.length === 2) year = '00' + year;
    if (year.length === 3) year = '0' + year; 
    
    
    return `${day}-${month}-${year}`;
}

function getWeekDay(date1) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date1.getDay()];
}

function firstDayWeek(week, year){
    let dates = new Date(year)

    if(week === 1){
        dates.setHours(24)
        return format(dates) 
    }

    let day = week*7*24
    dates.setHours(day-123)

    for(let i = 0;i<7;i++){
        let today = getWeekDay(dates)
        if(today === 'Monday'){
            let res = format(dates)
            return res
        }
        dates.setHours(-24)    
    }
    return dates

}
*/

function firstDayWeek(week,year){
    let time = new Date(year)
    if(week === 1){
        time.setHours(24)
        return formattedDate(time) 
    }
    let dayPlus = week*7*24
    time.setHours(dayPlus-123)
    console.log(time)
        function getWeekDay(date) {
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[date.getDay()-1];
        }
        function formattedDate(d) {
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate()-1);
            let year = String(d.getFullYear());
            
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            if (year.length === 1) year = '000' + year;
            if (year.length === 2) year = '00' + year;
            if (year.length === 3) year = '0' + year; 
            
            
            return `${day}-${month}-${year}`;
        }
        for(let i = 0;i<7;i++){
            let today = getWeekDay(time)
            if(today === 'Monday'){
                let res = formattedDate(time)
                return res
            }
            time.setHours(-24)    
        }
        return time
    }
    
console.log(firstDayWeek(43, '2022'))