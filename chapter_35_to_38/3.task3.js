var value= multiply(4,3,6);

console.log("value", value);   // ```The result is = 36```

function add(a, b){     // a=3, b=6
	var z= a+b;
	return z;           // z=9
};

function multiply(a, b, c){
	var z= a * add(b, c);       // a=4 add(b,c)=9
	return z;                   // z=36
};

console.log("course", course);   // ```The result is = undefined```
console.log("z", z);   // ```The result is = Error```

var course = "cloud native computing";