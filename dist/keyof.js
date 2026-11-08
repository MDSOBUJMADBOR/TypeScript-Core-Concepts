"use strict";
// interface User {
//     name: string;
//     age: number;
//     email : string;
// }
function getProperty(obj, Key) {
    return obj[Key];
}
const user = {
    name: "Sobuj",
    age: 25,
    email: "sobuj@gmail.com",
};
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
