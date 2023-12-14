let vowels = /[aeiouAEIOU]/g

function vowelDots(str){
    let ret = ''
    let strmatch = str.match(vowels)
    let j = 0
    //console.log(strmatch)
    if (strmatch !== null){
        for (let i= 0; i < str.length; i++){
            //console.log(strmatch[j])
            if (str[i] !== strmatch[j]){
                ret += str[i]
            } else if (str[i]=== strmatch[j]) {
                ret += str[i] + '.'
                j++
            }
            if (j === strmatch.length){
                ret += str.slice(i+1)
                return ret
            }
        }


    } else {
        return str
    }

   return ret 


}

console.log(vowelDots('something'))