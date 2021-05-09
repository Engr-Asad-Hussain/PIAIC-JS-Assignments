const userInput = prompt("Enter string: ");
console.log("Input string: ", userInput);


let replaceText = userInput.toLowerCase().split(" ");
let subStr = "";


for (i=0; i<replaceText.length; i++) {
    subStr = subStr + replaceText[i].charAt(0).toUpperCase() + replaceText[i].slice(1) + " ";
}

console.log("subStr: ", subStr);

