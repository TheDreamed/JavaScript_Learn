// Your code here
function hasThreeVowels(str){
    let newStr ="";
    let count =0;
    let vowels = 'aeiou';

    for(let i =0; i < str.length; i++){
        let char = str[i];
        if(vowels.includes(char)){
            newStr += char;
        }
    }
    for(let i=0; i<newStr.length; i++){
        let vow = newStr[i];
        if(vow !== newStr[i+1]){
            count++
        }
    }
    if(count >= 3){
        return true;
    }
       return false;

}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
