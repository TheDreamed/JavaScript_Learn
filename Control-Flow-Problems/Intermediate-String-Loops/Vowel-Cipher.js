function vowelCipher(string) {
    // your code here
    const vowels ='aeiou';
    let newStr="";

    for(let i=0; i<string.length; i++){
        let char=string[i];
        if(vowels.includes(char)){
            for(let i=0; i<vowels.length; i++){
                let vowels1 = vowels.indexOf(vowels[i]);
                let vowels2 = vowels1 + 1;
                if (char===vowels[i])

                newStr+= vowels[vowels2 % vowels.length];
            }
        }else{
            newStr+=char;
        }
    }
    return newStr;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
