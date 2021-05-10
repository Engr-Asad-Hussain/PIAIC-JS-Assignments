const userName = prompt("Enter your name: ", "Asad Hussain");
const dateOfBirth = prompt("Enter your Date of Birth: ", 25);
const month = prompt("Enter your Month of Birth: ", "Marchi").toLowerCase();
const monthOfBirth = month.charAt(0).toUpperCase() + month.slice(1);

const yearOfBirth = prompt("Enter your Year of Birth: ", 1998);


console.log("Hello " + userName + ", Good Morning!");

const dateObject = monthOfBirth + " " + dateOfBirth + ", " + yearOfBirth;
console.log("Your DOB is ", dateObject);

let DOB = new Date(dateObject);
console.log("--------------");
console.log(DOB);

let currentDate = new Date();
console.log("---------------");
console.log(currentDate);

const yearsDiff = currentDate.getFullYear() - DOB.getFullYear();
console.log("Year Difference: ", yearsDiff);

const monthDiff = currentDate.getMonth() - DOB.getMonth();
console.log("Month Difference: ", monthDiff)

const daysDiff = Math.abs(currentDate.getDate() - DOB.getDate());
console.log("Days Differecne: ", daysDiff);