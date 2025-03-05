const coding=["javascript","python","ruby","c++"]

const variable=coding.forEach((item)=>{
    console.log(item)
})
console.log(variable) // undefined  // forEach does not return anything ****

// when you want conditional data from array use FILTER and NOT forEach
const numbers=[1,2,3,4,5,6,7,8,9,10]
const evenNumbers=numbers.filter((num)=>{
    return num%2===0
})
console.log(evenNumbers) // [2,4,6,8,10]