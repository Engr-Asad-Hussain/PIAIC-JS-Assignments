// Initiallize an empty array
var courses = [];
const totalCourses = 5;

// Input Courses
for (i=0; i<totalCourses; i++) {
    var inputCourse = prompt(i + ". Enter Course: ");
    courses.push(inputCourse);
}
console.log("-------Courses-------------");
console.log(courses);
alert(courses);

// Print Courses one by one
for (i=0; i<courses.length; i++) {
    alert(i + ". " + courses[i]);
}


// Initiallize another array
var newCourses = [];

// Input once more elements
for (j=0; j<totalCourses; j++) {
    var inputNewCourse = prompt(j + ". Enter Course: ", courses[j]);
    newCourses.push(inputNewCourse);    
}


// Changing the element if user has input new element
for (i=0; i<courses.length; i++) {
    if (newCourses[i] !== courses[i]) {
        courses.splice(i, 1, newCourses[i]);   // starting index, how many delete, insert any
    }
}
alert(courses);

// Printing one by one
for (i=0; i<courses.length; i++) {
    alert(i + " " + courses[i]);
}
console.log("--------------Updated Courses---------");
console.log(courses);