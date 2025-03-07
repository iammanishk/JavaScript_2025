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

let persoon = {
    greet: function() {
        console.log("Hello!");
    }
};

let student1 = Object.create(persoon); // student inherits from person
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



// Object.prototype.brain
let superHero = {
    fly: ()=>{
        console.log('I can fly');
    }
}

let superHero1 = {
    name: "Ironman",
    power: "Suit",
}
let superHero2 = {
    name: "Spiderman",
    power: "Web",
}

superHero1.__proto__ = superHero;
// Injecting anything into the parent directly
Object.prototype.brain = ()=>{
    console.log('I have a brain');
}


console.log(superHero1.name);
console.log(superHero1.fly());
console.log(superHero1.brain());


console.log(superHero2.name);
console.log(superHero2.brain());
console.log(superHero2.fly());





/*
🔹 Constructor Functions and Prototypes
A constructor function is used to create multiple objects with shared properties/methods using prototypes.
*/
// Example: Creating a Prototype with a Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob

/*
✅ Key Points:

Person.prototype.greet adds a method to the prototype.
person1 and person2 inherit greet() from Person.prototype.
Instead of creating greet() for every object, they share the same function.
*/

/*
🔹 Prototype Inheritance (Extending Objects)
You can extend an existing object by setting its prototype to another object.
*/
// Example: Inheriting from a Parent Object 
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} is barking!`);
};

let myDog = new Dog("Buddy", "Golden Retriever");

myDog.eat();  // Buddy is eating (inherited from Animal)
myDog.bark(); // Buddy is barking!

/*
✅ How It Works?

Dog inherits from Animal using Object.create(Animal.prototype).
Dog gets all the properties & methods of Animal.
bark() is added only to Dog, not Animal.
*/


/*
🔹 Summary
Concept	                Explanation
Prototype	            A hidden object that stores shared methods & properties
Prototype Chain	        JavaScript looks up an object’s prototype if a property/method is missing
Object.create()	        Creates an object that inherits from another object
Constructor Function	A function to create multiple objects with shared behavior
Prototype Inheritance	One object inherits properties and methods from another object
*/


/*
📌 Understanding this and call() in JavaScript (Simple Explanation)
JavaScript’s this keyword and call() method are very important for controlling how functions are executed and which object they belong to.

🔹 What is this in JavaScript?
this refers to the object that is calling the function.
*/

// Example 1: this inside an Object
let person3 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person3.greet();  // Output: Hello, my name is Alice
// Here, this.name refers to person.name because greet() is called by person.


// Example 2: this in a Regular Function (Global Context)
function showThis() {
    console.log(this);
}

showThis();  // In browsers: Window object
// When a function is called without an object, this refers to the global object (window in browsers).

// Example 3: this in an Event Listener
let button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", function() {
    console.log(this);  // Refers to the button element
});
// Inside an event listener, this refers to the element that triggered the event.




/*
🔹 What is call() in JavaScript?
The call() method is used to manually set the value of this when calling a function.
*/

// Example 1: Using call() to Borrow a Method
let personn1 = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let personn2 = { name: "Bob" };

person1.greet.call(person2); // Hello, my name is Bob
/*
✅ Explanation:

greet() originally belongs to person1.
Using call(person2), we temporarily change this to person2, so it prints "Hello, my name is Bob".
*/

// Example 2: Using call() with Arguments
function introduce(age, city) {
    console.log(`Hi, I am ${this.name}. I am ${age} years old and I live in ${city}.`);
}

let person = { name: "Alice" };

introduce.call(person, 25, "New York");
// Output: Hi, I am Alice. I am 25 years old and I live in New York.
// call() allows us to set this manually and pass arguments individually.



/*
🔹 Difference Between call() and apply()
Both call() and apply() allow you to manually set this, but they handle arguments differently.

Method	    How Arguments are Passed
call()	    Passed individually (e.g., call(thisArg, arg1, arg2))
apply()	    Passed as an array (e.g., apply(thisArg, [arg1, arg2]))
*/


// Example: call() vs. apply()
function introduce(age, city) {
    console.log(`Hi, I am ${this.name}. I am ${age} years old and I live in ${city}.`);
}

let personn = { name: "Alice" };

introduce.call(personn, 25, "New York");  
introduce.apply(personn, [25, "New York"]);  
// ✅ Both produce the same output, but apply() uses an array.