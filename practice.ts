//Student profile

const MyName: string = "Mai";
const age: number = 38;
const isEnrolled: boolean = true;
const describeStudent = (name: string, age: number): string => {
  return `${name} is ${age} years old .  `;
};

 
console.log(describeStudent(MyName, age));

//Greeting with options

const formatGreeting = (name: string, formal?: boolean): string => {
     return formal ? `Good day, ${name}.` : `Hi ${name}!`;
};

console.log(formatGreeting(MyName, true));
console.log(formatGreeting(MyName));

//doubling ages
let ages: number[] = [17, 20, 33, 38, 45];
const agesInFiveYears: number[] = ages.map((n) => n + 5);
console.log(ages);
console.log(agesInFiveYears);

//Filtering Names
const names: string[] = ["Mai", "Bob", "Charlie", "Julie", "Eve"];
const shortNames: string[] = names.filter((name) => name.length <= 4);
console.log(shortNames);

//Combined Transformations
const numbers: number[] = [12, 23, 35, 49, 56, 67, 78, 89];
const passingScores: number[] = numbers.filter((n) => n >= 50);
const letterGrades: string[] = passingScores.map((n) => {
  if (n >= 80) {
    return "A";
  } else if (n >= 60) {
    return "B";
  } else {
    return "C";
  }
});
//const passedStudents: string[] = passingScores.map((n, index) => `Student ${index + 1} scored ${n} and received grade ${letterGrades[index]}`);
const numberOfFailedStudents: number = numbers.filter((n) => n < 50).length;

console.log(letterGrades);

console.log(numberOfFailedStudents);


//Book interface
interface Book {
    title: string;
    author: string;
    pages: number;
}

const book: Book = {
    title: "The book of magic",
    author: "James Smith",
    pages: 250
};
console.log(book.title);

//Nested & Optional Properties

interface Address {
    city: string;
    postalCode?: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}
const person1: Person = {address: {city: "Helsingborg", postalCode: "25462"}, name: "Mai", age: 38};
const person2: Person = {address: {city: "Stockholm"}, name: "Bob", age: 25};

console.log(person1.address.city);
console.log(person2.address.city);

//Chaining array methods on interface data
interface Product {id: number; name: string; price: number; tags: string[];};
const arrayOfProducts: Product[] = [
    {id: 1, name: "Laptop", price: 1200, tags: ["work", "computers"]},
    {id: 2, name: "Smartphone", price: 1800, tags: ["work", "mobile"]}, 
    {id: 3, name: "Headphones", price: 150, tags: ["work", "audio"]},
    {id: 4, name: "Coffee Maker", price: 900, tags: ["appliances", "kitchen"]},
    {id: 5, name: "Blender", price: 80, tags: ["appliances", "kitchen"]},
];  
const productsPricedUnder1000: Product[] = arrayOfProducts.filter((product) => product.price < 1000);
const productNamesPricedUnder1000: string[] = productsPricedUnder1000.map((product) => product.name);
const productsTaggedWithWork: Product[] = arrayOfProducts.filter((product) => product.tags.includes("work"));
const productNamesTaggedWithWork: string[] = productsTaggedWithWork.map((product) => product.name);
console.log(productNamesPricedUnder1000);
console.log(productNamesTaggedWithWork);


type PasswordFieldType = number | string;

const password = (code: PasswordFieldType) => {
  console.log("password: " + code);
};


