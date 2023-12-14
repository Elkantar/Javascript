function isValid(date){
    /*var format = /^(\d{4}\/){2}\d{1,2}$/;
    if(format.test(date)){
        return false
    }else {
        return true
    }*/
   if (isNaN(date)|| date == 0){
    return false
   } else{
    return true
   }
}

function isAfter(date1, date2){
    if(date1 - date2 >0){
        return true
    }
    return false

}

function isBefore(date1, date2){
    if(date1 - date2 < 0){
        return true
    }
    return false
}

function isFuture(date1){
    if(!isValid(date1)){
        return false
    }
    let date2 = new Date()
    if(date1 - date2 > 0){
        return true
    }
    return false
}

function isPast(date1){
    if(!isValid(date1)){
        return false
    }
    let date2 = new Date()
    if(date1 - date2 < 0){
        return true
    }
    return false
}
console.log(isFuture(''))