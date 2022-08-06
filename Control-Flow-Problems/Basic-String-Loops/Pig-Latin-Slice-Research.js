function pigLatinWord(word) {
    // your code here...
    let vowels ='aeiou';
    let count = word.length-1;
    let count1=1;

        if(vowels.includes(word[0])){
            return (word + "yay")
        }

        for(let i=0; i<=word.length; i++){
            let char = word[i];

        if(vowels.includes(word[i])){
         let wordslice = word.slice(i)
         let wordslice2 = word.slice(0, i);
         return wordslice + wordslice2 + "ay";
        }
        }
  };



  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
