
function printValue(value: string | number): void {
    if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if(typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

printValue(2)