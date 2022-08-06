function fibonacci(length) {
    if(length === 0){
        return [];
    }
    else if(length === 1){
        return [1];
    }

   let arr= [1,1];
   for(let i= arr.length; i<length; i++){
   let arrnum = arr.length-2
   let sum = arr[arrnum+1] + arr[arrnum];
   arr.push(sum);
}
return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
