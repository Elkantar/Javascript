function adder(array1, work = 0){ 
    let arr = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return arr + work
}

const initialValue = 0;

function sumOrMul(array1, work = 0){
    //let res
    /*let arr = array1.reduce((number, number2) => {
        if(number2%2 === 0){
            number *= number2,
            initialValue
        } else {
            number += number2,
            initialValue
        }
        console.log(number)
    });*/
    let i = 0
    let even = array1.reduce((acc, cuu) => {
        //console.log(i)
        if (work == 0){
            if(cuu%2 == 0) {
                acc *= cuu   
            } else {
                acc += cuu   
            }
        } else {
            if (i != 0){
                if(cuu%2 == 0) {
                    acc *= cuu   
                } else {
                    acc += cuu   
                }
            } else {
                if(work%2 == 0 && cuu%2 == 0) {
                    acc *= work * cuu 
                    i++
                } else if (work%2 != 0 && cuu%2 != 0){
                    acc += cuu  + work  
                    i++
                } else if (work%2 != 0 && cuu%2 == 0){
                    acc = (acc + work) * cuu
                    i++
                }else if (work%2 == 0 && cuu%2 != 0){
                    i++
                    acc =acc * work + cuu
                }
            }
        }
        
        //console.log(acc) 

        return acc
      
      })
    
      return even
    //return arr
}

//console.log(adder([9, 24, 7, 11, 3], 10))
//console.log(sumOrMul([1,2,3,5,8], 5))
//console.log(sumOrMul([29, 23, 3, 2, 25]))
//console.log((sumOrMul([18, 17, 7, 13, 25], 12)))


/*function funcExec(arr, work){
    let array = arr.reduce(function(sum, current) {
        return current(sum);
    }, work)
    return array
}*/
function funcExec(func,x = 0){
    let result = func.reduce((sum, current) => {
        return current(sum);
      },x)
      return result
}
//console.log(funcExec([1,2,3], 1))