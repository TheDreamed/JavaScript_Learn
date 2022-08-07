function nextPrime(num){
    num2 = num + 1;
    for(let i = 2; i < num; i++){
        if(num2 % i === 0){
            num++;
            num2++;
        }
        }
        return num2;
    }



console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
