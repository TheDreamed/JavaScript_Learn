function caesarCipher(string, num) {
    // your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr="";
    for(let i =0; i<string.length; i++){
        let char = string[i];

       for(let i =0; i<alphabet.length; i++){

          if(alphabet[i] === char){
              let alphabet1 = alphabet.indexOf(alphabet[i]);
              let alphabet2 = alphabet1+num;
              newStr += alphabet[alphabet2 % alphabet.length];

          }
       }
    }
       return newStr;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
