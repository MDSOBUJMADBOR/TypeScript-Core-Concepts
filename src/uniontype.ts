
let id: string | number;

id = 101;
// id = "USER-101";

console.log(id);



type UserId = string | number;

function getUser (id: UserId): void {
    console.log("User ID:", id);
}
getUser(101)
getUser("101")