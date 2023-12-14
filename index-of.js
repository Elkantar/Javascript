function indexOf(arr, item, debut = 0) {
    for (let i = debut; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, item, debut = arr.length - 1) {
    for (let i = debut; i >= 0; i--) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

function includes(arr, item){
    for (let i = 0; i< arr.length; i++){
        if (arr[i] === item){
            return true
        }
    }
    return false
}
console.log(lastIndexOf(["t", "0","0", "t"], "t", 2))