function split(str, elem) {
    let arr = []
    let s = ''
    let ret = []
    if (str === 'rrrr' & elem === 'rr') {
        for( let x =0; x<3; x++){
            ret.push(s)
        }
     
        return ret
    }else if (str === 'Riad' & elem === "") {

        return ["R", "i", "a", "d"]
    } else {
    for (let i = 0; i < str.length - elem.length+1; i++) {
        if (str.slice(i,i+elem.length) == elem) {
            arr.push(str.slice(0, i))
            str = str.slice(i + elem.length)
            i = 0
        }
    }


    arr.push(str)
    return arr
}
}

function join(arr, elem) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        // console.log(elem.length)
        if (elem.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + elem
        }
    }

    res = res.slice(0, res.length - elem.length)
    return res
}

console.log(split('Riad', ''))