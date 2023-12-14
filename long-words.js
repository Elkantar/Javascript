function longWords(arr){
    let verif = (current) => current.length >= 5
    return arr.every(verif)
}

console.log(longWords(["eeeee","eeeee","eeee","eeeee" ]))

function oneLongWord(arr){
    let even = (element) => element.length >= 10
    return arr.some(even)
}

console.log(oneLongWord(["eeeee","eeeee","eeeee","eeeee","eeeee","eeeee","eeeeeaaaaa"]))

function noLongWords(arr){
    let verif = (current) => current.length < 7
    return arr.every(verif)
}

console.log(noLongWords(["eeeee","eeeee","eeeee","eeeee","eeeee","eeeeeaa"]))