function isPrime(number){
    if(number < 2){
        return false;
    }

    let i = 2
    while(i < number){
        if(number % i ===0){
            return false;
        }
        i++;
    }
    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
