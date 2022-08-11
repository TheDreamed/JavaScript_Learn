function sameCharCollapse(str) {
    let reducible = true;

    while (reducible) {
        let chars = str.split("");
        reducible = false;

        for (let i = 0; i < chars.length - 1; i++) {
            if (chars[i] == chars[i+1]) {
                chars[i] = "";
                chars[i + 1] = "";
                reducible = true;
            }
        }
        str = chars.join("");
    }
    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));
console.log(sameCharCollapse("uqrssrqvtt"));
