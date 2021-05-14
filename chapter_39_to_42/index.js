const courses = ["Maths", "English", "Urdu", "Physics", "Chemistry"];
const marks = [];
let subjectMarks = 0;

for (i=0; i<courses.length; i++) {
    subjectMarks = Number(prompt("Enter " + courses[i] + " marks: ", 0));
    while (subjectMarks > 100 || Number.isNaN(subjectMarks)) { 
        alert("Invalid Marks\nPlease enter marks less than or equals to 100");
        subjectMarks = Number(prompt("Enter " + courses[i] + " marks: ", subjectMarks));
    }
    marks.push(subjectMarks);
}


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


switch (true) {
    case (percentage >= 90):
        console.log("Percentage: " + percentage);
        console.log("Grade A+");
        break;
    case (percentage >= 75 && percentage <= 89):
        console.log("Percentage: " + percentage);
        console.log("Grade A");
        break;
    case (percentage >= 60 && percentage <= 74):
        console.log("Percentage: " + percentage);
        console.log("Grade B");
        break;
    case (percentage >= 45 && percentage <= 59):
        console.log("Percentage: " + percentage);
        console.log("Grade C");
        break;
    case (percentage >= 30 && percentage <= 44):
        console.log("Percentage: " + percentage);
        console.log("Grade D");
        break;
    case (percentage >= 0 && percentage <= 29):
        console.log("Percentage: " + percentage);
        console.log("Grade F");
        break;
    default:
        console.log("Invalid Data");
}















