// const userInput = prompt("Enter string: ");
const userInput = "There is a yard near my hotel";

console.log("Input string: ", userInput);
// console.log("to LowerCase: ", userInput.toLowerCase());
// console.log("to UpperCase: ", userInput.toUpperCase());


var count = 0;
var replaceText = "";
for (i=0; i<userInput.length; i++) {
    // search spaces
    if (userInput.slice(i, i+1) === " ") {
        replaceText = userInput.replace(/ /g, "  ");
        count++;
    }
}
console.log("Spaces Found: ", count);
console.log(replaceText);