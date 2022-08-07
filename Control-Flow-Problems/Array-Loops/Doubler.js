function doubler(numbers) {
    // your code here...
    let arr=[];
    let newnum = 0;
    for(let i=0; i<numbers.length; i++){
        newnum = numbers[i] * 2;
        arr.push(newnum);
    }
    return arr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
