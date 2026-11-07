
function printValue(value: string | number): void {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if(typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

printValue(2)




function checkUser ( user: string | null): void {
    if(user === null) {
        console.log("user not found");
    }else {
        console.log(user.toUpperCase());
    }
}
checkUser(null)

