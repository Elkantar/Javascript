const escapeStr = "\',\\,/, \",\' \`"
const arr = [4, '2']
Object.freeze(arr)

const obj = {str : "m", num : 12,  bool : !0,undef : undefined}
Object.freeze(obj)
const nested = {
    arr : [4,undefined,'2'], 
    obj : { 
        str : "a",
        num : 3, 
        bool : !0
    }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)