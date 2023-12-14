/*function add(arr){
    let res = 0
    for(let i=0; i< arr.length; i++){
        res = res + arr[i]
    }
    return res
}

function round(num){
    if (num.length > 1){
        num = add(num)
    }
    if (num >= 0){
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                let save = num - i
                if (save < 0.5){
                    return i
                } else {
                    i = i + 1
                    return i
                }
            }
        }
    } else {
        for (let i = 0; i >= num;i--){
            if (num - i > -1 && num-i <=0){
                let save = num - i
                if (save < -0.5){
                    return i - 1
                } else {
                    i = i 
                    return i
                }
            }
        }
    }
}



function round(num) {
    let res = 0
    let check = false
    if (num < 0) {
        num = num * -1
        check = true
    } 
    if (num != 0){
    for (let i = 0; i < num; i++) {
        res++
    }
    let ost = num-(res-1)
    if (ost == 0.5 && check) {
        return (res-1) *-1
    }
    if (ost >= 0.5) {
        if (check) {
            return res *-1
        }
        return res

    } else if (ost < 0.5) {
        if (check) {
            return (res - 1) * -1 
        }
        return res - 1
    } else {
        if (check) {
            return num*-1
        }
        return num
    }
    } else {
        return num
    }
}

function floor(num){
    let res = 0
    let check = false
    /*if (Array.isArray(num)){
        let map = num.map(x => floor(x))
        return map
    }
    if (num < 0) {
        num = num * -1
        check = true
    } 
    if (num != 0){
    for (let i = 0; i < num; i++) {
        res++
    }
    let ost = num-(res-1)
    if (ost == 0.5 && check) {
        return (res-1) *-1
    }
    if (ost >= 0.5) {
        if (check) {
            return (res - 1) *-1
        }
        return res - 1

    } else if (ost < 0.5) {
        if (check) {
            return (res - 1) * -1 
        }
        return res - 1
    } else {
        if (check) {
            return (num - 1) *-1
        }
        return num
    }
    } else {
        return num
    }
}

function ceil(num){
    if (num >= 0){
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                i = i + 1
                return i
            }
        }
    } else {
        num = num/(1/(-1))
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                    i = -i
                    return i
            }
        }   
    }
}

function floor(num){
    if (num >= 0){
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                    i = i
                    return i
            }
        }   
    } else {
        num = num/(1/(-1))
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                    i = -i-1
                    return i
            }
        }   
    }
}

function trunc(num){

    if (num >= 0){
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                i = i
                return i
            }
        }
    } else {
        num = num/(1/(-1))
        for (let i = 0; i <= num;i++){
            if (num - i < 1 && num/i >=0){
                    i = -i
                    return i
            }
        }   
    }

}
*/
function float2int(nbr){
    if (nbr<0) {
        for(let i=-0;i>=nbr;i--)
        {
            if (nbr<=i && nbr>i-1) {
                return i
            }
        }
    }
    if (nbr>=68719476735) {
        for(let i=68719476735;i<nbr+1;i++)
        {
            if (nbr>=i && nbr<i+1) return i
        }
    }
    for(let i=0;i<nbr+1;i++)
    {
        if (nbr>=i && nbr<i+1) return i
    }
  }
  
  function round(nbr) {
    if (nbr<0 && nbr-float2int(nbr)<-0.5) return float2int(nbr)-1
    if (nbr-float2int(nbr)< 0.5) return float2int(nbr)
    return float2int(nbr)+1
  }
  
  function ceil(nbr) {
    //if (0<nbr && nbr<1) return 1
    if (nbr<0) return float2int(nbr)
    if (nbr-float2int(nbr)!=0) return float2int(nbr)+1
    return nbr
  }
  
  function floor(nbr) {
    if (nbr<0) return float2int(nbr)-1
    return float2int(nbr)
  }
  
  function trunc(nbr) {
    if (nbr<0 && nbr>-1) return -0
    return float2int(nbr)
  }
// console.log(floor([3, -4, 2, -3, 0]))