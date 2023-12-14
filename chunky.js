function chunk(array, size) {
    let arr2 = [];
    let subArr = [];

    for (let i = 0; i < array.length; i += size) {
        subArr = array.slice(i, i + size);
        arr2.push(subArr);
    }

    return arr2;
}
console.log(chunk('gzgrzdzrg',"3"))