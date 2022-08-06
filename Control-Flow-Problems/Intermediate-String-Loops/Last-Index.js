function lastIndex(str, char) {
    // your code here
   for (let i = str.length - 1; i >= 0; i--) {
    let string = str[i];
        if(char === string){
            return i;
        }
    }
}



console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
