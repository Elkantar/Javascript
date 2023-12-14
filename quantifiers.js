function every(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) == false) {
            return false
        }
    }
    return true
}

function some(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) == true) {
            return true
        }
    }
    return false
}

function none(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) == true) {
            return false
        }
    }
    return true
}