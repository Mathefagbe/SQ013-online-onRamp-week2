function squareDigit(str) {
    let convertedstr=[]
    for (let i = 0; i < str.length; i++) {
        convertedstr.push(parseInt(Math.pow(str[i],2),10)) 
    }
    return convertedstr.join("")
 }
let str='9119'
console.log(squareDigit(str))
  module.exports =squareDigit
