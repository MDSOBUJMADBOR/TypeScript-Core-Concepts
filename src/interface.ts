

interface Student {
    name: string;
    age: number;
    phone?: number;
    email: string;
}
const user2 : Student = {
    name: "MD",
    age: 25,
    email: "sobuj@gmail.com"
}
console.log(user2);



interface Product {
  readonly  id:number;
    name: string;
    price: number;
}

const product: Product = {
    id:101,
    name: "Laptop",
    price: 150
}

// product.id = 102

console.log(product);
