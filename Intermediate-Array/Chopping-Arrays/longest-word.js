// your code here
function longestWord(sentence){
    let words = sentence.split(" ");
    let longWord ="" ;''

    for(let i = 0; i<words.length; i++){
        word = words[i];
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
