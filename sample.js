function returnSevens(max) {
    for (let i = 0; i < max; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }

    }
}

console.log(returnSevens(49));
