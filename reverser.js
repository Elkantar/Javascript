function reverse(arr){
    let out = []
    let str = ''
    let flag = true
        for(let i=arr.length-1; i >=0; i--){
            if (Array.isArray(arr)) {
                if (typeof(arr[i]) === 'number'){
                    return someFunction(arr)
                }else {
                    console.log(arr[i])
                    out.push(arr[i]);
                }
                flag = false
            } else {
                str += arr[i]  
            }
        }
        if (flag = false ){
        return out
        } else {
            return str
        }
        
}
function someFunction(n){
    var newArray = [];
    for(var i=n.length -1; i >= 0; i--){
      newArray.push(n[i]);
    }
    return newArray;
  }
  



console.log( reverse([1, 2, 3]))