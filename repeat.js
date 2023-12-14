function repeat(str, nbr){
    if (nbr > 0){
        if (nbr === 1){
            return (str)
        } else {
            return str + repeat(str, nbr -1)
        }
    } else {
        return ''
    }
}

//console.log(repeat("tr", 2))