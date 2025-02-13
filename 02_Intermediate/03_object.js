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


