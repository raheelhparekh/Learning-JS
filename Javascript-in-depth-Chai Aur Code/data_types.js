// 7 types of Primitve data types in Javascript--> copy banti he usme changes hoti he to original me nahi hoti
// 1. Number-> no integer / decimal / float 
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// example of primitive data types
let a = 10; // 'a' is assigned the value 10
let b = a;  // 'b' is assigned a copy of the value of 'a'

console.log(a); // Outputs: 10
console.log(b); // Outputs: 10

a = 20; // 'a' is now assigned a new value 20, the original value 10 is not changed

console.log(a); // Outputs: 20
console.log(b); // Outputs: 10 (unchanged, because 'b' holds a copy of the original value of 'a')



// Refrence data types
// 1. Array
// 2. Objects
// 3. Functions

let obj1 = { name: "Alice", age: 25 }; // obj1 holds a reference to an object
let obj2 = obj1; // obj2 is assigned the same reference as obj1

console.log(obj1); // Outputs: { name: "Alice", age: 25 }
console.log(obj2); // Outputs: { name: "Alice", age: 25 }

obj1.name = "Bob"; // Modify the object through obj1

console.log(obj1); // Outputs: { name: "Bob", age: 25 }
console.log(obj2); // Outputs: { name: "Bob", age: 25 } (obj2 sees the change because it references the same object)

obj2.name="Charlie"
console.log(obj1);
console.log(obj2);


let skills=["HTML","CSS","JS"];
console.log(typeof skills); // --> OBJECTS and not array