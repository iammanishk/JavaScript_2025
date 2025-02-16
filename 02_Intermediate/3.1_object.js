/*-------------------------------------------*\
|                  OBJECTS                    |
\*------------------------------------------*/



// ============================= DESTRUCTURE OBJECTS =============================

const course = {
    courseName : "JavaScript",
    coursePrice : 299,
    courseDuration : "3 months",
    courseTeacher : "Manish",
    courseType : "Online"
}

console.log(course.courseDuration); // This is old method

// Destructuring
const { courseDuration } = course;
console.log(courseDuration); // This is new method


// If you feel that the name of some key is too long, you can rename it while destructuring
const { courseDuration : duration, courseTeacher : teacher}  = course;
console.log(teacher);
