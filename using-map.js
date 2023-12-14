function citiesOnly(arr){
    let array = arr.map(place =>{
        return place.city
    })
    return array
}

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
]))

function upperCasingStates(arr){
    let ret =''
    let array = arr.map( place =>{
        for(let i =0; i < place.length;i++){
            
            if (i == 0 ){
               ret = place[i].toUpperCase()
            } else if (place[i-1]  == " "){
                ret += place[i].toUpperCase()
            }else {
                ret += place[i]
            }
        }
        //console.log(ret)
        return ret
    })
    return array
}

console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']

function fahrenheitToCelsius(arr){
    let array = arr.map(function Celsia(value){
        value = parseInt(value)
        let cel = (value -32)*5/9
        cel = Math.floor(cel)
        return cel+'°C'
        })
    return array
}

console.log(fahrenheitToCelsius([
    '30°C',
    '37°C',
    '5°C',
    '12°C',
    '-13°C',
    '21°C',
    '-19°C',
  ])) // -> ['20°C', '15°C', '-4°C']

function trimTemp(arr){
    let ret = ''
    let array = arr.map(place =>{
        for(let i = 0; i < place.temperature.length; i++){
            if (place.temperature[i] !== " "){
                ret += place.temperature[i]
            }
        }
        place.temperature = ret
        ret =''
        return place

    })
    return array
}



console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ])) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */

  function Upper(place){
    let ret =''
    for(let i =0; i < place.length;i++){        
        if (i == 0 ){
           ret = place[i].toUpperCase()
        } else if (place[i-1]  == " "){
            ret += place[i].toUpperCase()
        }else {
            ret += place[i]
        }
    }
    return ret
}

/*function tempForecasts(arr){
    let str = ''
    let ret = ''
    let res = 0
    let array = arr.map(place =>{
        for(let i = 0; i < place.temperature.length; i++){
            if (place.temperature[i] !== " "){
                ret += place.temperature[i]
            }
        }

        res = parseInt(ret)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)


        str = cel + '°Celsius in ' + place.city + ", " + Upper(place.state)

        return str
    })
    return array
  }
  function cutLast(str){
    let words = ''
    if (str.length >2){
        for (let i = 0 ; i< str.length - 2; i++){
            words = words + str[i]
        }
    }
    return words
}*/
function tempForecasts(states){
    let array = states.map(all =>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        let strin = all.temperature
        let res2 = all.state.match(regexSp)
        let str = strin.match(resRegex)
        // let res3 = all.state.match(regexSp)
        let res = strin.replace(resRegex,'')
        if(res2!== null){
            all.state = all.state.replace(regexSp,res2[0].toUpperCase())
        }
        res = parseInt(res)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)
        let strRes = cel+'°Celsius in '+all.city+', ' + all.state[0].toUpperCase()+all.state.slice(1)
        return strRes
    })  
    return array
}
  console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ])) // -> ['38°Celsius in Pasadena, California'])