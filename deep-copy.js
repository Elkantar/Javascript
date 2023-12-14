const superTypeOf = (arg) => toString.call(arg).slice(8, -1)

const deepCopy = (arg) => {
    let res
    if (superTypeOf(arg) == 'Object') {
        res = {}
        Object.keys(arg).forEach((k)=>res[k]=deepCopy(arg[k]))
    } else if (superTypeOf(arg)== 'Array') {
        res = []
        arg.forEach((v,i)=>res[i]=deepCopy(arg[i]))
    } else {
        res = arg
    }
    return res
}

/*function deepCopy(obj){
    let copy = []
    if (superTypeOf(obj) === 'Array'){
        for (let i = 0; i < obj.length; i++){
            //console.log(obj[i])
            copy = obj[i]
        }
        return copy
    } else {
        return Object.assign({}, (obj))
    }
}

function superTypeOf(arg) {
    if (arg instanceof Map) return 'Map'
    if (arg instanceof Set) return 'Set'
    if (arg instanceof Array) return 'Array'
    if (typeof arg == 'undefined') return 'undefined'
    if (arg == null) return 'null'
    //if (Object.isFrozen(arg)) return 'Frozen'

    const str = typeof arg 
    return str
}


console.log(deepCopy( {user: 'mika', age: 37 }))
console.log(deepCopy( [1, 'a']))
*/
/*
const r = Math.random()
const obj = [r, Object.freeze([r, Object.freeze([r])])]

let copy=deepCopy(obj)

console.log((obj[1][1] !== copy[1][1]), obj, copy)
*/