function consonantCancel(sentence) {
    // your code here
    let vowels = "aeiou";
    let words = sentence.split(" ");
    let arr = [];
    for(let i=0; i<words.length; i++){
        word = words[i];
        if(!vowels.includes(word)){
            arr.push(vowel(word));
        }

    }
    return arr;
}

function vowel(words){
    let vowels = 'aeiou';


    for(let i =0; i < words.length; i++){
        let word = words[i];
        if(vowels.includes(word)){
            return words.slice(i);
        }
    }
    return words;
}



console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
