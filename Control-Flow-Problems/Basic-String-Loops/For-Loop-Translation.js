function aCounter(word){
    count = 0;
    for(let i = 0; i <word.length; i++){
        let char = word[i];
    if(char ==="a" || char === "A"){
        count++;
    }
    }
    return count;
}



console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
