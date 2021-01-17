let maths = Number(prompt("Enter total marks in Maths: ", 0));
let urdu = Number(prompt("Enter total marks in Urdu: ", 0));
let chem = Number(prompt("Enter total marks in Chemistry: ", 0));
let phy = Number(prompt("Enter total marks in Physics: ", 0));
let eng = Number(prompt("Enter total marks in English: ", 0));

const marksObtained = maths + urdu + chem + phy + eng;
const totalMarks = 500;

if ( (maths <= 100) && (urdu <= 100) && (chem <= 100) && (phy <= 100) && (eng <= 100)) {
    console.log("Total Percentage: " + ((marksObtained*100)/totalMarks));
} else {
    console.log("Invalid Marks Entered!");
}

