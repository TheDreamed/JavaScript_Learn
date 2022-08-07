// Your code here
function alternatingWords(arr){
    for(let i=0; i<arr.length; i+=2){
        arr[i].toLowerCase();
    }
    for(let i=1; i<arr.length; i+=2){
        arr[i].toUpperCase();
    }
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
