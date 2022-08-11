// your code here
function initials(name){

    let words = name.split(" ");
    let newWord = [];

    for(let i=0; i<words.length; i++){
        word = words[i];
        newWord.push(word[0]);
    }
    return newWord.join("").toUpperCase();
}






console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
