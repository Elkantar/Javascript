function hasCity (strcountry, arr){
    return function(strcity){
        let ret = strcity + " is not a city from " + strcountry
        for (let i = 0; i < arr.length;i++){
            if (strcity == arr[i]){
                return strcity + " is a city from " + strcountry
                
            }
        }
        return ret
    }
    
}