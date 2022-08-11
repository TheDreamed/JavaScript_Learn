// your code here
function containsWord(sentence, targetWord){

    let words = sentence.split(" ");
    let arr = [];

    for(let i=0; i<words.length; i++){
        word = words[i];
        if(word.toLowerCase() === targetWord){
            return true;
        }
    }
    return false;
}



console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false
