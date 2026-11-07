"use strict";
function total(...numbers) {
    console.log(numbers);
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(total(2, 6, 3, 4));
