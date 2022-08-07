// Your code here
function additionMutator(nums1, num){
    for(let i=0; i<nums1.length; i++){
        nums1[i] += num;
    }
    return nums1;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]
