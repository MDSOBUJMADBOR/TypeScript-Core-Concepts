"use strict";
//* যে Function স্বাভাবিকভাবে শেষ হয় না:
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Something went wrong");
}
catch (error) {
    console.log("Error handled successfully");
}
