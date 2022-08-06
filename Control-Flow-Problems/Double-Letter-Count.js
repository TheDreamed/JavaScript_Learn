function doubleLetterCount(string) {
    // your code here
    let count =0;
    for(let i=0; i<string.length; i++){
        let char = string[i];
        if(char === string[i+1]){
            count++;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
