let arr=[1,2,3,4,5]
console.log(arr)

let newArr=arr.join() // join() method converts the elements of an array into a string
console.log(newArr) // 1,2,3,4,5
console.log(typeof newArr) // string

//------------------------------------------------------------------------------------------------

// slice , splice --> difference is slice does not modify the original array, splice modifies the original array

console.log(arr.slice(1,3)) // prints index 1 and 2 elements [2,3] (1 is inclusive 3 is exclusive)
console.log(arr) // original array is not modified

console.log(arr.splice(1,3)) // prints index 1,2,3 elements [2,3,4] (1 is inclusive 3 is exclusive)
console.log(arr) // original array is modified [1,4,5]

//------------------------------------------------------------------------------------------------

//concat --> used to merge two or more arrays

let arr1=[1,2,3]
let arr2=[4,5,6]
let newArr1=arr1.concat(arr2)
console.log(newArr1) // [1,2,3,4,5,6]

// instead of concat we can use spread operator to merge two or more arrays
let newArr2=[...arr1,...arr2]
console.log(newArr2) // [1,2,3,4,5,6] 