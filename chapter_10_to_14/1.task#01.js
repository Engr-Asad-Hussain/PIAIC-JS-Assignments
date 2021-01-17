const num1 = Number(prompt("Enter 1st Number: ", "1"));
const num2 = Number(prompt("Enter 2nd Number: ", "1"));
const sign = prompt("Enter operation\n+ , - , * , / , % : ");


if (sign === "+") {
    console.log(num1 + " " + sign + " " + num2 + " = " + (num1+num2));
}
else if (sign === "-") {
    console.log(num1 + " " + sign + " " + num2 + " = " + (num1-num2));
}
else if (sign === "*") {
    console.log(num1 + " " + sign + " " + num2 + " = " + (num1+num2));
}
else if (sign === "/" && num2 !== 0) {
    console.log(num1 + " " + sign + " " + num2 + " = " + (num1/num2));
}
else if (sign === "%") {
    console.log(num1 + " " + sign + " " + num2 + " = " + (num1%num2));
}
else {
    console.log("Invalid Operator!\nHint: May be you have entered space before or after operator.\nHint: May be you have entered invalid number example, 8/0");
}