function accum(str) {
    let groupedString = []
    let joinedString;
    let stringArray = []
    //first iteration runs through every element in the str
    for (let i = 0; i < str.length; i++) {
        let iteratedValue = []
        // second iteration runs based on the index of the each element in the string i.e if i is 3 it will runs 4 times
        for (let y = 0; y <= i; y++) {
            //
            iteratedValue.push(str[i].toLowerCase())
            joinedString = iteratedValue.join("").trim()
        }
        //this help to push the value into the empty array
        groupedString.push(joinedString)
    }
   
    // this help to iterate through the values from the joined strings and then use replace to convert the first letter into upper case
    for (let i = 0; i < groupedString.length; i++) {
        stringArray.push(groupedString[i].replace(groupedString[i][0], groupedString[i][0].toUpperCase()))
    }
    if(stringArray.length===0){
        return undefined
    }else{
        return stringArray.join("-")
    }

    

}
let str = ""
console.log(accum(str))
module.exports = accum