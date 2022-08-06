function tripletTrue(str){
    let count = 0;
     for(let i = 0; i < str.length; i++){
         let char = str[i];
         if(char === str[i+1]){
             count++;
         }
     }
     if(count >= 3){
         return true;
     }
     return false;
 }


 console.log(tripletTrue('caaabb'));        // true
 console.log(tripletTrue('terrrrrible'));   // true
 console.log(tripletTrue('runninggg'));     // true
 console.log(tripletTrue('bootcamp'));      // false
 console.log(tripletTrue('e'));             // false
