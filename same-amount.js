function sameAmount(str,reg1,reg2){
    let regexp1 = new RegExp(reg1,'g')
    let regexp2 = new RegExp(reg2,'g')

    let strmatch1 = str.match(regexp1)
    let strmatch2 = str.match(regexp2)

    if ((strmatch1 != null && strmatch2 != null) && (strmatch1.length === strmatch2.length)){
        return true 
    } else {
        return false
    }
}
//const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
//console.log(sameAmount('data', /q /, /qqqqqqq/))