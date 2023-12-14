function filter(arr, f) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) {
            result.push(arr[i]); 
        }
    }
    return result; 
}

function reject(arr, f) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr) === false) {
            result.push(arr[i]); 
        }
    }
    return result; 
}

function partition(arr, func) {
    let result = []
    let right = []
    let left = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) == false) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    result.push(left)
    result.push(right)
    return result
}