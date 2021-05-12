const courses = ["Maths", "English", "Urdu", "Physics", "Chemistry"];
const marks = [];
let subjectMarks = 0;

for (i=0; i<courses.length; i++) {
    subjectMarks = Number(prompt("Enter " + courses[i] + " marks: ", 0));
    while (subjectMarks > 100) {
        alert("Invalid Marks\nPlease enter marks less than or equals to 100");
        subjectMarks = Number(prompt("Enter " + courses[i] + " marks: ", subjectMarks));
    }
    marks.push(subjectMarks);
}

// console.log(courses);
// console.log(marks);

function per(marks) {
    const totalMarks = 500;
    let accumulatedMarks = 0;
    for (i=0; i<marks.length; i++) {
        accumulatedMarks = accumulatedMarks + marks[i];       
    }
    
    return (accumulatedMarks * 100 / totalMarks)
}

const percentage = per(marks);
console.log(percentage);

switch (percentage) {
    case percentage > 90:
        console.log("Percentage: " + percentage);
        console.log("Grade A+");
        break;
    case 40:
        console.log("Percentage: " + percentage);
        console.log("Grade B");
        break;
    default:
        console.log("Invalid Data");
}















