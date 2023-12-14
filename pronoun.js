const pronouns = ['i','you','he','she','it','we','they']

function pronoun (str) {
    let res = {}
    let arr = str.toLowerCase().match(/\w+/ig)
    arr.forEach((i,y)=> {
        if (pronouns.includes(i.toLowerCase())) {
            if (!(i in res)) {
                res[i] = {word:[],count:0}
            }
            if (arr[y+1] !== undefined && !(pronouns.includes(arr[y+1].toLowerCase()))) {
                res[i]['word'].push(arr[y+1])
            } 
            res[i]['count'] += 1
        }
    })
    return res
}

console.log(pronoun(`The seal method seals an object, preventing new properties from being
added to it and marking all existing properties as non-configurable. Values of present 
properties can still be changed as long as they are writable.`))