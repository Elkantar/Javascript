/*const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
    vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}*/

const filterEntries = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (func([k,v])) {
            res[k] = v
        }
    }
    return res
}

const mapEntries = (obj,func) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        res[func([k,v])[0]] = func([k,v])[1]
    }
    return res
}

const reduceEntries = (obj,func,iv) => {
    let arr = Object.entries(obj)
    if (iv == undefined) {
        iv = ''
    }
    for (let i of arr) {
        iv = func(iv,i)
    }
    return iv
}

const lowCarbs = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        if (v/100*nutritionDB[k]['carbs'] < 50) {
            res[k] = v
        }
    }
    return res
}

const totalCalories = (obj) => {
    let res = 0
    for (let [k, v] of Object.entries(obj)) {
        res += v/100*nutritionDB[k]['calories']
    }
    return Number(res.toFixed(1))
}

const cartTotal = (obj) => {
    let res = {}
    for (let [k, v] of Object.entries(obj)) {
        let tmp = {}
        for (let [kk, vv] of Object.entries(nutritionDB[k])) {
            tmp[kk] = Math.round((v/100*vv)*1000)/1000
        }
        res[k] = tmp
    }
    return res
}