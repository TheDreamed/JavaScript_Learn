// your code here

function removeEWords(sentence){
    let word = sentence.split(" ");
    let e = "e";
    let str = [];

    for(let i=0; i<word.length; i++){
        char = word[i];
        if(!char.includes(e)){
            str.push(char);
        }
    }
    return str.join(' ');
}





console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
