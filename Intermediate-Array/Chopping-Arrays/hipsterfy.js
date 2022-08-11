// your code here
function lastVowel(words){
    let vowels = 'aeiou';

    for(let i = words.length - 1; i>=0; i--){
        word = words[i];
        if(vowels.includes(word)){
            return words.slice(0 , i) + words.slice(i +1);
        }
    }
}

function hipsterfy(sentence){
    let words = sentence.split(" ");
    let arr = [];
    for(let i=0; i<words.length; i++){
        word = words[i];
        arr.push(lastVowel(word));
    }
    return arr.join(" ");
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
