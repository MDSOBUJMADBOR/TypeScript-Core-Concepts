let values : string = "Hello MD";

let result = (values as string).toUpperCase();

console.log(result);





const form = document.getElementById("myForm");

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.getElementById("email") as HTMLInputElement;

    alert(input.value);
});