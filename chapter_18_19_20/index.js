var courses = [];
const totalCourses = 5;

for (i=1; i<=totalCourses; i++) {
    var input = prompt(i + ". Enter Course: ");
    courses.push(input);
}
console.log("---------Courses---------");
console.log(courses);

var newCourses = [];

for (i=1; i<=totalCourses; i++) {
    var newInput = prompt(i + ". Enter Courses: ", courses[i-1]);
    newCourses.push(newInput);
}


for (i=0; i<courses.length; i++) {
    if (courses[i] !== newCourses[i]) {
        courses.splice(i, 1, newCourses[i]);
    }
}
console.log("-------Updated Courses--------");
console.log(courses);