function dynamicFizzBuzz(max, num1, num2){
    let nums =[];
    for(let i = num1; i < max; i++){
        if(i % num1 === 0 && i % num2 !== 0){
       nums.push(i);
    } else if (i % num1 !== 0 && i % num2 === 0)
        nums.push(i);
}
return nums;
}


console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
