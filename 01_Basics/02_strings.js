/*-------------------------------------------*\
|               STRINGS                       |
\*------------------------------------------*/



/*
A string in JavaScript is a sequence of characters enclosed in:
✅ Double quotes ("")
✅ Single quotes ('')
✅ Backticks (` ` for template literals)
*/

let name = 'Manish Yadhuvanshi';
let greeting = "Hello Manish!";
let template = `Welcome, ${name}!`; // Template literal (uses backticks)

console.log(name); 
console.log(template); 
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\
|               STRING METHODS                 |
\*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*
JavaScript provides many built-in methods to work with strings.

1. length (Find String Length)
Returns the number of characters in the string.
*/

console.log(name.length);

/*
2. toUpperCase() & toLowerCase() (Change Case)
Converts all letters to uppercase or lowercase.
*/

console.log(name.toUpperCase());
console.log(name.toLowerCase());

/*
3. trim() (Remove Extra Spaces)
Removes spaces from start and end of the string.
*/

console.log(name.trim());

/*
4. slice(start, end) (Extract Part of String)
Extracts a portion of the string from start to end (not including end). This is a zero-based index and also works with negative numbers.
*/

console.log(name.slice(0, 6));
console.log(name.slice(7));
console.log(name.slice(-11));


/*
5. substring(start, end) (Similar to slice())
Works like slice(), but does not accept negative indexes.
*/

console.log(name.substring(0, 6));


/*
6. replace(old, new) (Replace Part of String)
Replaces only the first occurrence of a word.
*/

console.log(name.replace('Yadhuvanshi', 'Kumar'));

/*
7. replaceAll(old, new) (Replace All Occurrences)
Replaces all occurrences of a word.

javascript
Copy
Edit
*/

let sentence = "JavaScript is great. JavaScript is fun!";
console.log(sentence.replaceAll("JavaScript", "Python"));

/*
8. charAt(index) (Find Character at Position)
Returns the character at a specific position.
*/

console.log(name.charAt(5));


/*
9. indexOf(substring) (Find Position of a Word)
Returns the first position where a word appears.
*/

console.log(name.indexOf('Yadhuvanshi'));


/*
10. includes(substring) (Check If String Contains a Word)
Returns true if the word exists, otherwise false.
*/

console.log(name.includes('Manish'));

/*
11. startsWith(substring) & endsWith(substring)
startsWith() → Checks if the string starts with a given word.
endsWith() → Checks if the string ends with a given word.
*/

console.log(name.startsWith('Manish'));
console.log(name.endsWith('Delhi'));


/*
12. concat(str1, str2, ...) (Join Strings)
Joins multiple strings together.
*/

console.log(name.concat(' is a developer.'));


/*
13. split(separator) (Convert String to Array)
Splits a string into an array based on a separator.
*/

let word = " Apple, Banana, Orange";
console.log(word.split(','));

/*
14. repeat(n) (Repeat a String Multiple Times)
Repeats the string n times.
*/

console.log(name.repeat(3));





