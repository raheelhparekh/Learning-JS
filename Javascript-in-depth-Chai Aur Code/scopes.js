// Let
let a=300;
if (true) {
  let a = 10;
  console.log("Inner:",a); //10
}

console.log(a); // prints 300

// Var
var ab=300;
if (true) {
  var ab = 10;
  console.log("Inner:",ab); //10
}

console.log(ab); // prints 10