interface Person {
    name: string;
    age : number;
}

interface Developer extends Person {
    skills: string [];
    salary: number;
}

const developer: Developer = {
    name: "MD",
    age:25,
    skills:["React","Node.js"],
    salary:30000
}

console.log(developer);

