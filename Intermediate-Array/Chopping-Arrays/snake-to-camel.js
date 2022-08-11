// Your code here
function snakeToCamel(sentence){
    sentence = sentence.toLowerCase();
    let words = sentence.split("_");
    let arr = [];

    for(let i = 0; i<words.length; i++){
        word = words[i];
        arr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());

    }
   return arr.join("");
}



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
