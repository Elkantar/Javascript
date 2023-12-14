function words(str){
    let nstr = str.split(' ')
    return nstr
}

function sentence (str){
    let nstr = str.join(' ')
    return nstr
}

function yell(str){
    let nstr = str.toUpperCase()
    return nstr
}

function whisper(str){
    let nstr = '*' + str.toLowerCase() + '*'
    return nstr
}

function capitalize(str){
    let nstr = str.toUpperCase()[0]+str.slice(1).toLowerCase()
    return nstr
}