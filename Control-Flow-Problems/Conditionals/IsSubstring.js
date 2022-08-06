function isSubstring(searchString, subString) {
    // your code here...

    mainString = searchString.toLowerCase();
    secondString = subString.toLowerCase();


    return mainString.indexOf(secondString) !== -1;
  }

  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
