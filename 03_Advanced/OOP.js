/*---------------------------------------------------------------*\
|                  OBJECT ORIENTED PROGRAMMING                    |
\*--------------------------------------------------------------*/

/*
Object-Oriented Programming (OOP) is a way of structuring code using objects. Objects store properties (data) and methods (functions) to interact with data.

JavaScript uses prototypes and classes to implement OOP concepts like:
✅ Encapsulation → Hiding details inside objects.
✅ Inheritance → Sharing properties and methods between objects.
✅ Polymorphism → Using the same method in different ways.
*/

/*
1️⃣ What is an Object?
An object is a collection of properties (key-value pairs) and methods (functions inside objects).
*/

// 🔹 Creating an Object in JavaScript

const student = {
    name: "Manish",
    age: 21,
    greet: function(){
        console.log(`Hello I am ${this.name}`);
    }
};
console.log(student);
student.greet();

/*
name and age are properties.
greet() is a method.
*/



/*
2️⃣ Prototypes & Prototype Inheritance
In JavaScript, objects inherit properties from a prototype (a parent object).

🔹 What is a Prototype?
Every object in JavaScript has a hidden link to another object, called its prototype. This prototype is like a blueprint that objects can use to access shared methods and properties.

📌 Think of it like a parent and child relationship:

A child can inherit traits from a parent (but can also have its own traits).
Similarly, JavaScript objects inherit properties and methods from their prototype.
*/

// 🔹 Example: Prototype in Action

let person = {
    greet: function() {
        console.log("Hello!");
    }
};

let student1 = Object.create(person); // student inherits from person
student.name = "Alice";

console.log(student1.name); // Alice
student1.greet();  // Hello! (inherited from person)

/*
✅ What’s happening?

student doesn’t have a greet() method, but it inherits it from person.
JavaScript automatically looks up the prototype if a method/property is missing.
*/


/*
🔹 How Prototypes Work in JavaScript
When you try to access a property or method on an object:

JavaScript first checks the object itself.
If not found, it looks at the prototype.
If still not found, it keeps going up the prototype chain until it reaches null.
*/

// Example: Prototype Chain

let animal = {
    sleep: function() {
        console.log("Sleeping...");
    }
};

let dog = Object.create(animal);
dog.bark = function() {
    console.log("Woof! Woof!");
};

dog.bark();  // Woof! Woof!  (Own method)
dog.sleep(); // Sleeping...  (Inherited from animal)

/*
✅ JavaScript first checks dog for sleep().
❌ dog doesn’t have sleep(), so it looks at animal (its prototype).
*/



const employee = {
    calcTax(){
        console.log('Tax is 20%');
        
    }
}


const manish = {
    salary: 50000,
}

manish.__proto__ = employee;
console.log(manish);

manish.calcTax();


// .__proto__ is used to set the prototype of an object.

let codingLang = {
    favLang(){
        console.log('I love JavaScript');
    }
};

let user1 = {
    name: "Manish",
    age: 21,
}
let user2 = {
    name: "Anubhav",
    age: 18,
    favLang:()=>{
        console.log('I love Python');
    }
}

// Setting prototype of user1 and user2
user1.__proto__ = codingLang;
user2.__proto__ = codingLang;

user1.favLang(); // Inherited from codingLang
console.log(user2.name);
user2.favLang(); // It has its own favLang method so it will not inherit from codingLang

//If object and method have same method, object's method will be used.





/*
🔹 Constructor Functions and Prototypes
A constructor function is used to create multiple objects with shared properties/methods using prototypes.
*/
