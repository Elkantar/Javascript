function slice(arg, debut = 0 , fin = arg.length){
    let words =''
    let arr = []
    if (debut >= 0 & fin >= 0){
        for (let i = debut ; i< fin; i++){
            if (typeof arg == 'string') {
                words = words + arg[i]
            } else if (Array.isArray(arg)) {
                arr.push(arg[i])
            }
        }
    }else {
        let debuts, fins
        if (debut < 0){
             debuts = arg.length + debut
        } else{
            debuts = debut
        }
        if (fin < 0){
            fins = arg.length + fin
        }else {
            fins = fin
        }
        for (let i = debuts ; i< fins; i++){
            if (typeof arg == 'string') {
                words = words + arg[i]
            } else if (Array.isArray(arg)) {
                arr.push(arg[i])
            }
        }
    }
    if (typeof arg == 'string') {
        return words
    } else if (Array.isArray(arg)) {
       return arr
    }
    
}

console.log(slice([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6])