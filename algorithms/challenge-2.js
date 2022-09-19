function sumOfTwoSmallestNums(arr){
    let sortedArray=arr.sort((a,b)=>a-b)
    return sortedArray[0] + sortedArray[1]
 
}
let arr=[12,34,23,12,67]
console.log(sumOfTwoSmallestNums(arr))
module.exports = sumOfTwoSmallestNums
