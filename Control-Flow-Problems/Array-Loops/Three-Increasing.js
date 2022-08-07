// Your code here
function threeIncreasing(arr){
    count=0;
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let num1= arr[i+1] -1;
        let num2= arr[i+2] -2;
        if(num === num1 && num1 === num2){
            count++
        }
    }
    if(count===1){
        return true;
    }
    return false;
}


console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false
