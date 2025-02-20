/*-------------------------------------------*\
|                FUNCTION                     |
\*------------------------------------------*/

/*
1️⃣ What is DOM?
DOM (Document Object Model) is a structured representation of an HTML document. It allows JavaScript to access, modify, and manipulate elements dynamically on a webpage.

Think of the DOM as a tree-like structure where:

Each HTML tag is a node.
Text, attributes, and comments are also nodes.
JavaScript can select and manipulate these nodes to change content, styles, or behaviors.
*/

/*
2️⃣ How Does DOM Manipulation Work?
JavaScript allows us to: ✅ Select elements (e.g., <div>, <p>, <button>)
✅ Change content (modify text, images, links)
✅ Modify styles (change colors, font size, visibility)
✅ Handle events (clicks, inputs, hover effects)
✅ Add or remove elements dynamically
*/

/*
3️⃣ Selecting Elements in the DOM
To manipulate an element, we first need to select it. JavaScript provides several methods to select elements:


Method	                                Description	                                                Example
document.getElementById()	            Selects an element by its id	                            document.getElementById("myDiv")
document.getElementsByClassName()	    Selects elements by class (returns a collection)	        document.getElementsByClassName("myClass")[0]
document.getElementsByTagName()	        Selects elements by tag name (returns a collection)	        document.getElementsByTagName("p")[0]
document.querySelector()	            Selects the first matching element (CSS-style selector)	    document.querySelector(".myClass")
document.querySelectorAll()	            Selects all matching elements (returns a collection)	    document.querySelectorAll("p")

*/

/*
4️⃣ Changing Content and Attributes
Once we select an element, we can modify its content.
*/

document.getElementById("heading").innerText = "New Heading!";
document.getElementById("heading").textContent = "Another Heading!";
document.getElementById("heading").innerHTML = "<em>Italic Heading</em>";

/*
Method	        Description
.innerText	    Updates only visible text
.textContent	Updates all text (even hidden text)
.innerHTML	    Allows inserting HTML tags inside the element
*/