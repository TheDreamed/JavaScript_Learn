// your code here
function yeller(words){
    let arr = [];

    for(let i=0; i < words.length; i++){
        let yell = words[i].toUpperCase();
        arr.push(yell + "!");
    }
    return arr;
}



console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
