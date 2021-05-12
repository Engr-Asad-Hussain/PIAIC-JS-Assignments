const userStr = prompt("Enter any string: ", "Pakistan is a beautiful country");
console.log("Input: ", userStr);


function Capitalize(userStr) {
    let strSplit = userStr.toLowerCase().split(" ");
    console.log("Split String: ", strSplit);
    let result = "";
    
    for (i=0; i<strSplit.length; i++) {
        result = result + strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1) + " ";
    }
    console.log("Result: ", result);
}

Capitalize(userStr);