const obj1={
    fname:"Raheel",
    lname:"Parekh",

    getFullName:function(){
        return `${this.fname}`

    }
}

const obj2={
    fname:"Hitesh",
    lname:"Joker"
}

console.log(obj1.getFullName())
// console.log(obj2.getFullName()) // error bcoz obj2 does not have getFullName 

// now if you want to access those functions which are defined in another object. you will have to access the prototype.
// the  obj1 has its __proto__ and also has a function named getFullName
// the obj2 has its __proto__ but does not contain function named getFullName
// therefore u need to copy its prototype

obj2.__proto__=obj1
console.log(obj2.getFullName()) // now u can access the function bcoz obj2 has its prototype, it also has obj1 protoype and also has access to function inside obj1. PROTOYPE CHAINING & INHERITANCE is derived here.