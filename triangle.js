function triangle(str, num){
    let ret = ''
    for(let i = 1; i<= num; i++){
        let y = 0
            while (y < i){
                ret += str
                y ++
                //console.log(ret)
            }
        if (i !== num){
        ret += '\n'
        }
    }
    return ret
}

console.log(triangle('#', 4))