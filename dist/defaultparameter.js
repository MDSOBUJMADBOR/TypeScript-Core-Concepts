"use strict";
function welcome(name = "Guest") {
    return `Welcome ${name}`;
}
console.log(welcome());
console.log(welcome("Sobuj"));
