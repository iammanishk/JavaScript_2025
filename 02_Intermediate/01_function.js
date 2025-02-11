/*-------------------------------------------*\
|                FUNCTION                     |
\*------------------------------------------*/


/*
📌 What is a Function?
A function in JavaScript is like a recipe. It is a block of code that runs only when you call it.

💡 Why use functions?
✔ Avoid repeating code (write once, use many times)
✔ Organize code in a structured way
✔ Make debugging easier
*/

// How to Define a Function?

function sayHello(){
    console.log("Hello there this is Manish!");
    
}


// How to Call (Use) a Function?
sayHello();



/*
2️⃣ Function with Parameters (Like Input Values)
Functions can take parameters (like inputs).
*/
// 📝 Example: Function with One Parameter

function greet(name){
    console.log(`Hello ${name} how are you?`);
    
}

greet("Manish");

// 📝 Example: Function with Multiple Parameters

function add(num1, num2){
    console.log(num1 + num2);
    
}

add(5, 8)


/*
4️⃣ Function with Return Value
Some functions return a result instead of printing it.
*/

// 📝 Example: Function that Returns a Value

function multiply(num1, num2){
    let multiplex = num1 * num2;
    return multiplex;
}

let result = multiply(5, 8);
console.log(result);

/*
✅ The function returns the product of x and y.
✅ The return keyword sends the result back, so we can store it in a variable.
*/


/*
5️⃣ Function Expressions (Another Way to Write Functions)
Functions can also be stored in variables.
*/
// 📝 Example: Function Expression:
const substract = function(num1, num2){
    return num1 - num2;
}

let subtractionResult = substract(10, 5);
console.log(`Subtraction Result: ${subtractionResult}`);



/*
6️⃣ Arrow Functions (Shorter & Cleaner Syntax)
👉 Arrow functions (=>) make functions shorter.
✅ Shorter syntax (no need for function keyword).
✅ If there is one line, {} and return are optional.
*/

// 📝 Example: Arrow Function:


const multiplyt = (a, b) =>  a*b;
console.log(multiplyt(5, 8));


const divide = (a, b) => {
    return a / b;
}

let divisionResult = divide(10, 2);
console.log(`Division Result: ${divisionResult}`);

