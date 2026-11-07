"use strict";
function printValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
printValue(2);
