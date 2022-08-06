function eitherStringIncluded(sentence, word1, word2) {
    // your code here...
sentence1 = sentence.toLowerCase();
firstWord = word1.toLowerCase();
secondWord = word2.toLowerCase();

    if(sentence1.includes(firstWord) || sentence.includes(secondWord)){
        return true;
    }else{
        return false;
    }
}


console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
