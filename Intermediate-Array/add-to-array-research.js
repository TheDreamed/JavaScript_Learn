
function addToArray(location, element, testArray) {
    // Your code here
    for(let i=0; i<testArray.length; i++){
        if(location === "FRONT"){
            testArray.unshift(element);
        }else if(location === "BACK"){
            testArray.push(element);
        }else if(location !== "FRONT" || location !== "BACK"){
            return null;
        }
        return testArray;
     }

}


testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

console.log(addToArray("MIDDLE", 4, testArray)) // "ERROR"
console.log(testArray) // [0,1,2,3,4]
