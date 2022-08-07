// Your code here
function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function primeFactors(num){
    let primeFactors = [];
    if(isPrime(num)){
        primeFactors.push(num);
    }
    for(let i = 0; i < num; i++){
             if(num % i === 0 && isPrime(i)){
                 primeFactors.push(i)
             }


    }
    return primeFactors;
}




console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
