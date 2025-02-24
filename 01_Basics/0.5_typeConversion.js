// Type Conversion

/*
To convert to a different type, we need to type convert.

To convert a string to a number (a whole number or a decimal) we will write:
*/

// let vari = "32"
// vari = parseInt(vari) 

/*
If var contains an invalid number: 5ab, bb, akt, etc. then the program will fail.

Here is a table that shows how to convert to different types:

Cast	        Explanation
parseInt()	    Convert to a whole number
parseFloat()	Convert to a real number
Boolean()	    Convert to a boolean
String()	    Convert to a string
*/

/*
It is important to use the right type because it can affect the output.

Adding two string will result of:

"5" + "5" === "55"

Adding two numbers will result of:

5 + 5 === 10

*/

let billAmount = 650; // Don't change this line
let tipPercentage = 20; // Don't change this line
let numPeople = 4 // Don't change this line

billAmount = parseInt(billAmount);
tipPercentage = parseInt(tipPercentage);
numPeople = parseInt(numPeople);

// calculating percentage
let tipAmmount = (billAmount * tipPercentage) / 100;
console.log(tipAmmount);

// calculating total bill
let totalBill = billAmount + tipAmmount;
console.log(`Total (including tip): $${totalBill}`);

// calculating bill per person
let billPerPerson = totalBill / numPeople;
console.log(billPerPerson);