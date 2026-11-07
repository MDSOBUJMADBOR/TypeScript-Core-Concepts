"use strict";
//* ব্যবহারের আগে Type Check করতে হবে:
let value = "Hello";
// value = 100;
// console.log(value.toUpperCase());
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
if (typeof value === "number") {
    console.log(value.toFixed(2));
}
