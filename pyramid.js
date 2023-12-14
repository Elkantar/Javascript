function pyramid(str, num){
    let ret = ''
    for(let i = 1; i<= num; i++){
        let y = 0
        let j =0
        let a = num
        //for(let k = 0; k <2; k++){
            //console.log(i)
            //if (str.length = 1){
                while (j < num-i){
                    for(let tr = 1; tr <= str.length; tr++ ){
                    ret += " "
                    }
                    j++
                }
                //console.log(num -i)

                while (a > num - i){
                    ret += str
                    a--

                }   
                /*if (i !== num){
                    ret += '\n'
                }  */
                while (y < i- 1){
                    ret += str
                    y ++
                }
                if (i !== num){
                    ret += '\n'
                }   
            //}
        //}
    }
    return ret 
}

console.log(pyramid('#', 12))