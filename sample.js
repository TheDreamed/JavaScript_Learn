

function cleanDishes(dishes) {
    // Clean last dish by deleting it from array
    for (let i = dishes.length - 1; i >= 0; i--) {
        // This line is deleting 1 item from the array starting from index `i`
        dishes.splice(i, 1);
    }
}

console.log(cleanDishes([0, 1, 2]));
