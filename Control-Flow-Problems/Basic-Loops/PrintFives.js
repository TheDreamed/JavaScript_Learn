function printFives(max){
    for(let i = 0;  i<max; i+=5){
        if(max % 5 === 0)
        console.log(i);
    }
}
printFives(20) // prints out:
0
5
10
15
