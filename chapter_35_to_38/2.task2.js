const data = parseInt(prompt("Enter any integer: ", 5));

function factorialize(data) {
    let result = data;
    for (i=data-1; i>=1; i--) {
        console.log("result: " + result + "\t *  i: " + i + "\t || res*i: " + result*i);
        result = result * i;
    }
    return (result);
}

const factorial = factorialize(data);
console.log("Factorial of " + data + " is: " + factorial);