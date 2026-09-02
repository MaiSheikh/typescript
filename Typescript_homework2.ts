//Skill 1: Union Types
// ID card
type IDType = number | string;
const showId = (id: IDType) => {console.log(" Your ID is: " + id);};
showId(12345);
showId("ab123");

//Fruites Basket
type Fruit = "apple" | "banana" | "orange" ;
const eatFruit = (fruit: Fruit) => {console.log("You ate a " + fruit);};
eatFruit("apple");
eatFruit("orange");

//Pass or Fail
type result = true | false;
const printResult = (r: result) => { console.log("Result: " + (r ? "Pass" : "Fail"));
};
printResult(true);
printResult(false);

//Skill2 : Interfaces & AND
//Book interface
interface Books {
    title: string;
    pages: number;
}
const book1: Books = {
    title: "The book of magic",
    pages: 250
};

const describeBook = (book: Books) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`);
}
describeBook(book1);

//Combine Interfaces 
interface Teacher {
    name: string;
    subject: string;
}
interface Employee {
    id: string;
    email: string;
}   
type schoolTeacher = Teacher & Employee;
const teacher1: schoolTeacher = {
    name: "Mai Sh",
    subject: "Mathematics",
    id: "T001",
    email: "mai.sh@example.com"
};
const printTeacherInfo = (teacher: schoolTeacher) => {
    console.log(`Teacher Name: ${teacher.name}`);
    console.log(`Subject: ${teacher.subject}`);
    console.log(`ID: ${teacher.id}`);
    console.log(`Email: ${teacher.email}`); 
}
printTeacherInfo(teacher1);

//Favorite Car
interface Car { brand: string; year: number; }
const printCarInfo = (car: Car) => {
    console.log(`Brand: ${car.brand} , Year: ${car.year}`);
}
const myCar: Car = { brand: "Toyota", year: 2020 };
printCarInfo(myCar);

//Skill 3: Enums
//Color Picker
enum Color {red = "Red", green = "Green", blue = "Blue"};
const showColor = (color: Color) => {console.log("Selected color: " + color);};
showColor(Color.red);
showColor(Color.green);
showColor(Color.blue);

//Pizza Order
enum PizzaSize {small = "Small", medium = "Medium", large = "Large"};
const orderPizza = (size: PizzaSize) => {console.log("Ordered a " + size + " pizza");};
orderPizza(PizzaSize.small);
orderPizza(PizzaSize.medium);
orderPizza(PizzaSize.large);

//Role based access
enum UserRole {admin = "Admin", user = "User", guest = "Guest"};
const printRole = (role: UserRole) => { switch(role) {
    case UserRole.admin:
        console.log("You have admin access");
        break;
    case UserRole.user:
        console.log("You have user access");
        break;
    case UserRole.guest:
        console.log("You have guest access");
        break;
}
};
const userRole: UserRole = UserRole.admin;
printRole(userRole);    
const anotherUserRole: UserRole = UserRole.guest;
printRole(anotherUserRole);
const yetAnotherUserRole: UserRole = UserRole.user;
printRole(yetAnotherUserRole);

//Skill4 : Generics
//Wrap it up
const wrapInArray = <T>(value: T): T[] => { return [value]; };
wrapInArray(5);
wrapInArray("Hello");
console.log(wrapInArray(5));
console.log(wrapInArray("Hello"));

//First In Line
const firstItem = <T>(arr: T[]): T | undefined => { return arr[0]; };
firstItem([1, 2, 3]);
firstItem(["a", "b", "c"]);
console.log(firstItem([1, 2, 3]));
console.log(firstItem(["a", "b", "c"]));

//Swap Places
const swap = <T, U>(a: T, b: U): [U, T] => { return [b, a]; };
swap("hello", "world");

console.log(swap("hello", "world"));