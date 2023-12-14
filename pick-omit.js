function pick(o,k){
    let res = {}
    if (typeof k == 'string') {
        k = [k]
    }
    Object.keys(o).forEach((key)=> k.forEach((k)=> key == k ? res[k]=o[k] : ""))
    return res
}

function omit(o,k){
    let res = Object.assign({},o)
    if (typeof k == 'string') {
        k = [k]
    }
    k.forEach((key)=>delete res[key])
    return res
}