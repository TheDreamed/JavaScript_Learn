// your code here
function reverseSentence(sentence){

    let words = sentence.split(" ");
    let newWords = [];

    for(let i=words.length-1; i>=0; i--){
        word = words[i];
        newWords.push(word);
    }
    return newWords.join(" ");
}





console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
