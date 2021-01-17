let a = 2;
let b = a++ + ++a - --a + a--;
//  b=  2      4     3     3
//  a=  3      4     3     2

console.log("a = " + a);   
// Expected output of a = 2

console.log("b = " + b);
// Expected output of b = 6
