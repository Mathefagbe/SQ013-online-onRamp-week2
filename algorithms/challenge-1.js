let arr = [9, 3, 21, 30, 7,8,4,2]
function sumOfMultiples(arr) {
    let filterArray = arr.filter(value => {
        return value % 5 === 0 || value % 3 === 0
    })
    return filterArray.reduce((a,b)=>a+b)
}

console.log(sumOfMultiples(arr))
module.exports = sumOfMultiples


    
