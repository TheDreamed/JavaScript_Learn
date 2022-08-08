// your code here
function evenNumbers(max){
    let arr = [];
    for(let i = max; i>0; i--){
        if(i % 2 === 0){
            arr.push(i)
    }
   }
    return arr.reverse();
}






console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
