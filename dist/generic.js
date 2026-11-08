"use strict";
//* Generic ব্যবহার করে
function printValue(value) {
    return value;
}
// console.log(printValue<string>("MD"));
// console.log(printValue<number>(100));
// * Generic Array
function getFirstElement(items) {
    return items[0];
}
const numbers = getFirstElement([10, 20, 30]);
const names = getFirstElement(["sobuj", "Rahim", "Karim"]);
const userResponse = {
    success: true,
    message: "User fetched successfully",
    data: {
        name: "Sobuj",
        email: "sobuj@gmail.com",
    },
};
// console.log(userResponse);
const productResponse = {
    success: true,
    message: "Product fetched successfully",
    data: {
        title: "Laptop",
        price: 50000,
    },
};
// console.log(productResponse);
// * Generic Constraints
function getLength(value) {
    return value.length;
}
console.log(getLength("Sobuj"));
console.log(getLength([10, 20, 30]));
