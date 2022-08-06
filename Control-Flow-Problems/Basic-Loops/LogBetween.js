function logBetweenStepper(min, max, step){
    for(let i=min; i <= max; i+=step){
        console.log(i);
    }
}
// Examples:



logBetweenStepper(-10, 15, 5)  // prints out:
-10
-5
0
5
10
15
