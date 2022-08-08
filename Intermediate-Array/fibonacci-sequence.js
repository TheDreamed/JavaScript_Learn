// Your code here
function fibonacciSequence(num){
    let arr = [1, 1];

    for(let i = arr.length; i<num; i++){
        let firstNum = arr[arr.length - 1];
        let secondNum = arr[arr.length - 2];
        let number = firstNum + secondNum;
        arr.push(number)
    }
        return arr;
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]
