let p1={
    "fname":"Raheel",
    age:10
}

// now i want to copy this object into another
// can do it using spread operator. This is called shallow copy
let p2={...p1}

// now if u change age or name in p2, it will not change in p1
p2.age=12
console.log(p1.age) // 10
console.log(p2.age) // 12


// ---------------------------------------------------------------------------------------
// what if there was an object/array inside an object and you use spread operator to copy.
// shallow copy will allow only upper layer to be spreaded

let p3={
    "fname":"smith",
    age:20,
    hobbies:{
        "sport":"cricket",
        jersey:100
    }
}

let p4={
    ...p3
}
// if you change fname, age in p4 . no change in fname and age in p3
p4.fname="Sachin"
console.log(p3.fname) // Smith
console.log(p4.fname) // Sachin

// but if you now try to change hobbies in p4, changes will also be done in p3
p4.hobbies.jersey=50
console.log(p3.hobbies.jersey) // 50
console.log(p4.hobbies.jersey) // 50

// ---------------------------------------------------------------------------------------
// Therefore DEEP COPY is required to access and spread objects/arrays inside objects to.
// hOW TO DO IT?
// p5.object--> string--> copy string in p6 --> convert to object again

let p5={
    "fname":"smith",
    age:20,
    hobbies:{
        "sport":"cricket",
        jersey:100
    }

}
let p5KaString=JSON.stringify(p5)
console.log(p5KaString)
let p6=JSON.parse(p5KaString)

// Now try making chnages in p4
p6.hobbies.jersey=5000

console.log(p5.hobbies.jersey) // 100
console.log(p6.hobbies.jersey) // 5000