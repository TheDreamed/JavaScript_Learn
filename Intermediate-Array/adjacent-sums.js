// Your code here
function adjacentSums(nums){
    let arr =[];

    for(let i=0; i<nums.length-1; i++){
        let num = nums[i] + nums[i+1];
        arr.push(num);
    }
    return arr;
}

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
