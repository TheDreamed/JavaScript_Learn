function mostVowels(sentence) {
    // your code here
    const vowels = 'aeiou';
    let newSentence = sentence.split(' ')

    let countArr = [];

    for(let i = 0; i < newSentence.length; i++){
        let count = 0;
        let word = newSentence[i];
        for(let i = 0; i < word.length; i++){
            let word1 = word[i];

            if(vowels.includes(word1)){
                count++;
            }

        }
             countArr.push(count);
        }
        for(let i = 0; i < countArr.length; i++){
            let num = countArr[i]
            if(num > countArr[i+1]){
                return newSentence[num-1];
            }
        }
    }

console.log(mostVowels("what a wonderful life")); // "wonderful"
