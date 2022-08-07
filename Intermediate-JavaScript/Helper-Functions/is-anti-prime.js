let isAntiPrime = function(n) {
    let factorsOfN = numFactors(n);

    for (let i = 1; i < n; i++) {
        if(factorsOfN <= numFactors(i)) {
            return false
        }
    }

    return true;
};

let numFactors = function(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
};


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
