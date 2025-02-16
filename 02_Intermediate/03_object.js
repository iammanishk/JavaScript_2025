/*-------------------------------------------*\
|                  OBJECTS                    |
\*------------------------------------------*/

/*
In JavaScript, objects are collections of related data and functionalities. They are made up of properties (like variables) and methods (like functions) that describe an item.

1️⃣ What is an Object?
An object is a collection of key-value pairs.

Keys are called properties.
Values can be data (string, number, boolean) or functions (called methods).
📌 Real-Life Example:
Imagine an object as a car:

Properties: Color, Model, Year
Methods: Start, Stop, Honk

*/

/*
2️⃣ Creating an Object
There are several ways to create an object in JavaScript:
*/

// A. Using Object Literal (Easiest Way)
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White",
    start: function(){
        console.log("Engine started!");
        
    }
};
console.log(car);
console.log(car["model"]);

console.log(`The brand of car is ${car.brand} and the mode is ${car.model}`);


// B. Using new Object()
let person = new Object();
person.name = "Manish";
person.age = 21;
person.gender = "Male";

console.log(person);
console.log(typeof person);

// C. Using Constructor Function (Advanced)
function Person(name, age){
    this.name = name;
    this.age = age;
}

let student = new Person("Manish", 21);
console.log(student);   


// D. Using Class (Modern Way)
class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    makeSound(){
        console.log(this.sound);
        
    }
}

let dog = new Animal("Doog", "Woof");
console.log(dog);


/*
3️⃣ Object Properties
Properties are key-value pairs inside an object.
Keys are strings (or symbols), and values can be any data type.
*/

// 📌 Example: Accessing Properties
let user = {
    name: "Alice",
    age: 30
};
console.log(user.name);   // Dot notation
console.log(user["age"]); // Bracket notation


/*
🔹 Dot vs. Bracket Notation
Dot Notation: Use when you know the exact property name.
Bracket Notation: Use when the property name is dynamic or contains special characters.
*/

let key = "name";
console.log(user[key]); // Bracket notation with variable


// 4️⃣ Adding & Deleting Properties
// 📌 Example: Add Property
user.country = "USA";
console.log(user);

// 📌 Example: Delete Property
delete user.age;
console.log(user);


/*
5️⃣ Object Methods
Methods are functions stored as properties.
They allow objects to perform actions.
*/
// 📌 Example: Adding Methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2

//  📌 Shorthand Method (Modern Syntax)

let car1 = {
    brand: "Toyota",
    honk() { 
        console.log("Beep Beep!"); 
    }
};
car1.honk();  // Output: Beep Beep!


/*
6️⃣ this Keyword
this refers to the object that is calling the method.
It is used to access properties inside methods.
*/

// 📌 Example: Using this
let user = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};
user.greet();  // Output: Hello, Alice
// ✅ Here, this.name refers to the name property of the user object.

/*
7️⃣ Looping through Object Properties
You can iterate over object properties using for...in.
*/

// 📌 Example: Looping with for...in
let car2 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car2) {
    console.log(key + ": " + car2[key]);
}


/*
8️⃣ Object Methods (Built-in)
JavaScript provides many useful methods to work with objects:

A. Object.keys()
Gets an array of all property names.
*/
let keys = Object.keys(car);
console.log(keys);  // Output: ["brand", "model", "year"]

/*
B. Object.values()
Gets an array of all property values.
*/
let values = Object.values(car);
console.log(values);  // Output: ["Toyota", "Corolla", 2020]

/*
C. Object.entries()
Gets an array of key-value pairs.
*/
let entries = Object.entries(car);
console.log(entries);
/* Output:
[
  ["brand", "Toyota"],
  ["model", "Corolla"],
  ["year", 2020]
]
*/

/*
D. Object.assign()
Copies properties from one object to another.
*/

let carDetails = { color: "Red", seats: 4 };
let newCar = Object.assign({}, car, carDetails);
console.log(newCar);

/*
Object.assign() is used to copy properties from one or more objects into a new object.
Here’s what each part does:
{} → This is an empty object. This is where we will copy the properties.
car,carDetails → We are copying all the properties from carDetails into the new object.
It copies all the properties from the source objects (car and carDetails) into the target object ({}).
*/

/*
E. Object.freeze() & Object.seal()
Object.freeze(): Makes the object immutable (can't add, delete, or change properties).
Object.seal(): Can modify existing properties but can't add or delete them.
*/
let user = { name: "John" };
Object.freeze(user);
user.name = "Doe";  // ❌ Won't change
console.log(user);  // Output: { name: "John" }

/*
9️⃣ Nested Objects
Objects can contain other objects. These are called nested objects.

📌 Example: Nested Objects
*/
let student1 = {
    name: "Alice",
    marks: {
        math: 90,
        science: 85
    }
};
console.log(student1.marks.math);  // Output: 90

/*
🔟 Spread Operator (...)
The spread operator (...) allows you to copy or merge objects.
📌 Example: Copying an Object
*/
let person = { name: "John", age: 25 };
let copyPerson = { ...person };
console.log(copyPerson);

// 📌 Example: Merging Objects
let details = { age: 30, city: "New York" };
let merged = { ...person, ...details };
console.log(merged);
