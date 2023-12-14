function filterShortStateName(arr){
    let array = arr.filter(place => {
        return place.length<7
    })
    return array
}

function filterStartVowel(arr){
    let regexp = /^[aeiouAEIOU]/g

    let array = arr.filter(place => {
        let placematch = place.match(regexp)
        if (placematch != null){
            return place
        }
    })
    return array
}

function filter5Vowels(arr){
    let regexp = /[aeiouAEIOU]/g
    let j = 0
    let array = arr.filter(place => {
        //let placematch = place.match(regexp)
        for(let i = 0 ; i < place.length ; i++){
            let placematch = place[i].match(regexp)
            if (placematch != null){
                j++
            }
        }
        if (j >= 5){
            j=0
            return place
        }
        
        j = 0
    })
    return array
}

console.log(filter5Vowels( [
    'india',
    'Alaska',
    'Wyoming',
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
]))

function filter1DistinctVowel(arr){
    let regexp = /[aeiouAEIOU]/g
    let j
    /*let testVar = 'aeiouAEIOU'
    let regex2
    let res = ''*/
    let count = 0
    let countverif = 0
    let array = arr.filter(place => {
        //let placematch = place.match(regexp)
        for(let i = 0 ; i < place.length ; i++){
            let placematch = place[i].match(regexp)
            
            if (placematch != null && j == null){
                //console.log(place[i])
                j = place[i]
                //console.log(j)
                break
            }
        }

        for(let i= 0; i< place.length; i++){
            /*if (testVar[i] !== j && testVar[i].toUpperCase() !== j && testVar[i].toLowerCase() !== j){
                res += testVar[i]
            }*/
            if (place[i] == 'a'  || place[i] == 'A' || place[i] == 'e' || place[i] == 'E' || place[i] == 'i' || place[i] == 'I' || place[i] == 'o' || place[i] == 'O' || place[i] == 'u' || place[i] == 'U'){
                if (place[i] === j.toLowerCase() || place[i] === j.toUpperCase()){
                    //console.log(place[i])
                    count++
                    countverif++
                }else{
                    count++
                }
            }
        }

    j = null

    if (count == countverif){
        return place
    }
    count = 0
    countverif = 0
    })
    return array
}
/*
console.log(filter1DistinctVowel( [
    'india',
    'Alaska',
    'Wyoming',
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
]))
*/
/*
function multiFilter(arr){
    let regexp = /^[aeiouAEIOU]/g
    let regexp2 = /[aeiouAEIOU]/
    
    //let Southreg = /\bSouth/
    let array = arr.filter(place=>{
        let placematch = place.name.match(regexp)
        let tagmatch = place.tag.match(regexp2)
        // let smatch = place.region.match(Southreg)
        if (place.capital.length > 8 && !placematch != null && tagmatch != null && place.region != "South"){
            return place
        }
    })
    return array
}
*/
function multiFilter(obj){
    let array = obj.map(str=>{
        let flagCapital = false 
        let flagName = false
        let flagTag = false
        let flagRegion = false
        if(str.capital.length>=8){
            flagCapital = true
        }
        const regex = /^[aeiouAEIOU]/g
        const resRegex = new RegExp(regex)
        const regexT = /[aeiouAEIOU]/g
        const resRegexT = new RegExp(regexT)
        let res = str.name.match(resRegex)
        let resTag = str.tag.match(resRegexT)
        if(res===null){
            flagName = true
        }
        if(resTag !== null){
            flagTag = true
        }
        if(str.region !== 'South'){
            flagRegion = true
        }
        if(flagCapital&&flagName&&flagRegion&&flagTag){
            return str
        }
        return null
    })
    let arr = []
    arr = array.filter(function(s){
        return s!==null
    })
    return arr
}
/*
console.log(multiFilter([{ tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
{ tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
{
  tag: 'MO',
  name: 'Missouri',
  capital: 'Jefferson City',
  region: 'South',
},
{
  tag: 'PA',
  name: 'Pennsylvania',
  capital: 'Harrisburg',
  region: 'Northeast',
},
{
  tag: 'RI',
  name: 'Rhode Island',
  capital: 'Providence',
  region: 'Northeast',
},
]))
*/