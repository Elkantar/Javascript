function cutFirst(str){
    let words = ''
    if (str.length >2){
        for (let i = 2 ; i< str.length; i++){
            words = words + str[i]
        }
    }
    return words
}

function cutLast(str){
    let words = ''
    if (str.length >2){
        for (let i = 0 ; i< str.length - 2; i++){
            words = words + str[i]
        }
    }
    return words
}

function cutFirstLast(str){
    let words = ''
    for (let i = 2; i< str.length - 2; i++){
        words = words + str[i]
    }
    return words
}

function keepFirst(str){
    let words = ''
    if (str.length >2){

        for (let i = 0 ; i< 2; i++){
            words = words + str[i]
        }
    }else {
        words = str
    }

    return words
}

function keepLast(str){
    let words = ''
    if (str.length >2){

        for (let i =  str.length - 2 ; i<  str.length; i++){
            words = words + str[i]
        }
    }else {
        words = str
    }
    return words
}

function keepFirstLast(str){
    let words = ''
    if (str.length > 3){
        for (let i =  0 ; i< 2; i++){
            words = words + str[i]
        }
        for (let i =  str.length - 2 ; i<  str.length; i++){
            words = words + str[i]
        }
    } else{
        words = str
    }
    return words
}

console.log(keepFirstLast('afD'))