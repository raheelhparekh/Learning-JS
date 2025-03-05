
function calculate(...num){
    return num;
}

//console.log(calculate(5)); //5

// passing multiple values to the function but it will take only the first value and ignore the rest of the values
// but if you want all the values to be taken then you can use the REST operator use ... before the parameter name in the function definition
console.log(calculate(5,10,20)); //[ 5, 10, 20 ] as an array

// passing objects to the function -------------------

const object={
    name:"raheel",
    age:25
}

function handleObject(anyObject){
    console.log(`hello, my name is ${anyObject.name} and I am ${anyObject.age} years old`);
}

handleObject(object); //hello, my name is raheel and I am 25 years old

// another way to pass objects to the function
handleObject({name:"Ali",age:20}); //hello, my name is Ali and I am 20 years old


//passing arrays to the function -------------------
const array=[1,2,3,4,5];

function handleArray(anyArray){
    console.log(`the array is ${anyArray}`);
}

handleArray(array); //the array is 1,2,3,4,5