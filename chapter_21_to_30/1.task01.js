const inputNumber = parseFloat(prompt("Enter decimal number: "));
console.log("Number Input: ", inputNumber);

const ceilNumber = Math.ceil(inputNumber);
console.log("Maths Ceil: ", ceilNumber);

const text = "K2 is the highest mountain in Pakistan";
console.log("Text: ", text);

const sliceText = text.slice(0, ceilNumber);
console.log("Slice Text: ", sliceText);

var revSliceText = "";
for (i=sliceText.length-1; i>=0; i--) {
    revSliceText = revSliceText + sliceText[i];
}
console.log("Reverse Slice Text: ", revSliceText);