// interface User {
//     name: string;
//     age: number;
//     email : string;
// }

// type UserKeys = keyof User;

// type UserKeys = "name" | "age" | "email"

//* keyof-এর বাস্তব উদাহরণ

interface User {
  name: string;
  age: number;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, Key: K): T[K] {
  return obj[Key];
}

const user: User = {
  name: "Sobuj",
  age: 25,
  email: "sobuj@gmail.com",
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
