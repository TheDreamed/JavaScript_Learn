// Your code here
function moreDotLessDash(str){
    let count1=0;
    let count2=0;
    let dash = "-";
    let dot = ".";
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(dash.includes(char)){
            count1++;
        }else if(dot.includes(char)){
            count2++;
        }
    }
    if(count2 > count1){
        return true;
    }
    return false;
}



console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
