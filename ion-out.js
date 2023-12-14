function ionOut(str){
    let ret = []
    let regexp = /(\w*)(?=tion)/g
    let strmatch = str.match(regexp)

    if (strmatch === null){
        return ret
    } else {
        for(let i = 0; i < strmatch.length; i++){
            if (i%2 === 0){
                strmatch[i] = strmatch[i] + 't'
                ret.push(strmatch[i])
            }
        }
    }
    return ret
}