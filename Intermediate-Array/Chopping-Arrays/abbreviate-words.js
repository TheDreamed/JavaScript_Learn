function removeVowels(words){

    let vowels = "aeiou";
    let newWord = "";

    for(let i = 0; i<words.length; i++){
        word = words[i];
        if(!vowels.includes(word)){
            newWord += word;
        }
    }
    return newWord;
}

function abbreviateWords(sentence){

    let words = sentence.split(" ");
    let arr = [];

    for(let i=0; i<words.length; i++){
        word = words[i];
        if(word.length > 4){
            arr.push(removeVowels(word));
        }else{
            arr.push(word);
        }
    }
    return arr.join(" ");
}



console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
