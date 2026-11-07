"use strict";
let values = "Hello MD";
let result = values.toUpperCase();
console.log(result);
const form = document.getElementById("myForm");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("email");
    alert(input.value);
});
