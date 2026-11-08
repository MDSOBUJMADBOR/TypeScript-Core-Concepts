//* Generic ব্যবহার করে
function printValue<T>(value: T) {
  return value;
}

// console.log(printValue<string>("MD"));
// console.log(printValue<number>(100));

// * Generic Array

function getFirstElement<T>(items: T[]): T | undefined {
  return items[0];
}

const numbers = getFirstElement<number>([10, 20, 30]);

const names = getFirstElement<string>(["sobuj", "Rahim", "Karim"]);

// console.log(numbers);
// console.log(names);

// * Generic Interface

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface User {
  name: string;
  email: string;
}

interface Products {
  title: string;
  price: number;
}

const userResponse: ApiResponse<User> = {
  success: true,
  message: "User fetched successfully",
  data: {
    name: "Sobuj",
    email: "sobuj@gmail.com",
  },
};
// console.log(userResponse);

const productResponse: ApiResponse<Products> = {
  success: true,
  message: "Product fetched successfully",
  data: {
    title: "Laptop",
    price: 50000,
  },
};
// console.log(productResponse);

// * Generic Constraints

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Sobuj"));
console.log(getLength([10, 20, 30]));
