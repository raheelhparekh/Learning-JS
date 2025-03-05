const add=(a,b)=>{
    // curly braces me likha toh Return statement likhna hi padega
    return a+b;
}
console.log(add(2,3)); // 5 


const add1=(a,b)=>(a+b); // No need to write return statement if we are writing in single line just use ()
// this is the way to write arrow function in single line
console.log(add1(2,3)); // 5


const add2=(a,b)=>({hello : "world"}); // If we want to return object then we have to use () to wrap the object
console.log(add2(2,3)); // { hello: 'world' }
