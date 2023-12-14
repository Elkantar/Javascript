function letterSpaceNumber(str){
    let verif =/\w\s\d\b/g 
    let strmatch = str.match(verif)
    
    if (strmatch !== null){
        return strmatch
    } else {
        strmatch = []
        return strmatch
    }
}

console.log(letterSpaceNumber('example 01'))