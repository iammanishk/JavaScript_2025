/*-------------------------------------------*\
|              TIME AND DATE                  |
\*------------------------------------------*/

// JavaScript provides the Date object to work with dates and times. It allows you to get the current date/time, format it, and perform calculations.

/*
1️⃣ Create a Date Object 🕰️
We can create a new date using the Date() constructor.
*/

let now = new Date();
console.log(now); // Output: Current date and time


/*
2️⃣ Get Specific Date & Time Components 🕵️‍♂️
You can extract different parts of the date using various methods.
*/

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()+1}`);
console.log(`Date: ${now.getDate()}`);
console.log(`Day: ${now.getDay()}`);
console.log("Hour:", now.getHours());        
console.log("Minutes:", now.getMinutes());   
console.log("Seconds:", now.getSeconds());   
console.log("Milliseconds:", now.getMilliseconds())

/*
✅ Note:

getMonth() starts from 0 (January) to 11 (December). So, always add +1.
getDay() returns 0 (Sunday) to 6 (Saturday).
*/  

/*
3️⃣ Set a Specific Date & Time 📅
We can create a custom date by passing values to new Date(year, month, day, hour, minute, second, millisecond).
*/

let birthDay = new Date(2006, 0, 18) // 18th January 2006
console.log(birthDay);

/*
3️⃣ Set a Specific Date & Time 📅
We can create a custom date by passing values to new Date(year, month, day, hour, minute, second, millisecond).
*/
// 📌 Example: Create a Specific Date
let birthday = new Date(2000, 0, 15); // January 15, 2000
console.log(birthday);

// ✅ Why January = 0? Because months start from 0 in JavaScript.
// 📌 Example: Change Date Components
let myDate = new Date();
myDate.setFullYear(2030);
myDate.setMonth(5);   // June (Months start from 0)
myDate.setDate(25);   // 25th day
console.log(myDate);
// ✅ .setFullYear(year), .setMonth(month), and .setDate(day) allow us to modify the date.

/*
4️⃣ Get Time in Milliseconds ⏱️
In JavaScript, dates are stored as milliseconds since January 1, 1970 (Unix Timestamp).
*/
// 📌 Example: Get Time in Milliseconds
let now1 = new Date();
console.log("Milliseconds since 1970:", now1.getTime());
console.log("Same as:", Date.now()); // Alternative method

// ✅ getTime() and Date.now() both return the number of milliseconds since 01-01-1970.
// ✅ This is useful for calculating time differences.

/*
5️⃣ Format Date & Time ⌚
We can format the date using different methods.
*/
let now2 = new Date();

console.log(now2.getTime()); // Output: 1633663660000 (timestamp)
console.log(now2.toDateString()); // Output: "Wed Oct 08 2021"
console.log(now2.toTimeString()); // Output: "12:31:00 GMT+0530 (India Standard Time)"
console.log(now2.toLocaleString()); // Output: "10/8/2021, 12:31:00 PM"
console.log(now2.toUTCString()); // Output: "Fri, 08 Oct 2021 07:01:00 GMT"
console.log(now2.toISOString()); // Output: "2021-10-08T07:01:00.000Z"
console.log(now2.toLocaleDateString()); // Output: "10/8/2021"
console.log(now2.toLocaleTimeString()); // Output: "12:31:00 PM"

// ✅ Best format for database storage → toISOString().
// ✅ Best format for user display → toLocaleString().
