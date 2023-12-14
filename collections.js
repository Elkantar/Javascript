function arrToSet(arr){
    const set = new Set(arr)
    return set
}

function arrToStr(arr){
    let str = arr.toString()
    return str
}

function setToArr(set){
    let arr = Array.from(set)
    return arr
}

function setToStr(set){
    let str = set.toString()
    return str
}

function strToArr(str){
    let arr = Array.from(str)
    return arr
}

function strToSet(str){
    let arr = strToArr(str)
    let set = arrToSet(arr)
    return set
}

function mapToObj(map){
    const obj = Object.fromEntries(map)
    return obj
}

function objToArr(obj){

}

function objToMap(obj){
    const map = new Map(Object.entries(obj))
    return map
}

function arrToObj(arr){

}

function strToObj(str){

}