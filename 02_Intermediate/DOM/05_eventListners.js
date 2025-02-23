/*-------------------------------------------*\
|             Event Listner                   |
\*------------------------------------------*/

/*
.addEventListener() is a JavaScript method that allows you to listen for events (like clicks, key presses, or mouse movements) on an HTML element and run a function when that event occurs.

1️⃣ Why Use .addEventListener()?
It separates HTML and JavaScript, keeping the code clean and organized.
You can add multiple event listeners to the same element.
It works consistently across all modern browsers.
*/

// 2️⃣ Basic Syntax
element.addEventListener(event, function, useCapture);

/*
element → The HTML element you want to add the event to.
event → The name of the event (e.g., "click", "mouseover", "keydown").
function → The function to be executed when the event occurs.
useCapture (optional) → Boolean value (true or false). Used for event capturing or bubbling. Usually set to false.
*/

/*
3️⃣ Real-World Example: Button Click
Imagine you have a button on your webpage and you want to show a message when it's clicked.
 */
// 🔹 HTML:
/*
<button id="myButton">Click Me!</button>
<p id="message"></p>
*/
// 🔹 JavaScript:
let button = document.getElementById("myButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.innerText = "Button was clicked!";
});

// Output: When the button is clicked, the text changes to "Button was clicked!".

/*
4️⃣ Multiple Event Listeners
You can attach multiple events to the same element.
*/

let button = document.getElementById("myButton");

// Event for mouseover
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "yellow";
});

// Event for mouseout
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "initial";
});

/*
Output:

When you hover over the button, its background becomes yellow.
When you move the mouse away, it returns to the original color.
*/

/*
5️⃣ Removing Event Listeners
You can remove an event listener using .removeEventListener() but only if the function is named.
*/
let button = document.getElementById("myButton");

function showMessage() {
    alert("Button Clicked!");
}

// Add event listener
button.addEventListener("click", showMessage);

// Remove event listener
button.removeEventListener("click", showMessage);

// ✅ Here, removeEventListener() won’t work if the function is anonymous.

/*
6️⃣ Event Object
The event object contains information about the event (e.g., mouse position, key pressed). It is passed as an argument to the function.
*/
document.addEventListener("click", function(event) {
    console.log("X Position: " + event.clientX);
    console.log("Y Position: " + event.clientY);
});

// Output: Logs the X and Y coordinates of the mouse click.

/*
7️⃣ Event Propagation (Capturing and Bubbling)
Capturing → Events go from the outermost element to the target.
Bubbling (default) → Events go from the target to the outermost element.
🔹 Example:
*/
<div id="parent">
    <button id="child">Click Me</button>
</div>

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function() {
    alert("Parent Clicked!");
}, true); // Capturing

child.addEventListener("click", function() {
    alert("Child Clicked!");
}, false); // Bubbling

/*
Output:

If capturing is true, the Parent alert appears first.
If bubbling is false, the Child alert appears first.
*/

/*
8️⃣ Event Listener with Arrow Function
You can also use arrow functions with .addEventListener().
*/
let button = document.getElementById("myButton");

button.addEventListener("click", () => {
    alert("Arrow Function Clicked!");
});

// ✅ Arrow functions are shorter and easier to read but cannot be removed using .removeEventListener().