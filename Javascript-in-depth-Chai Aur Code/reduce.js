const nums=[1,2,3];

// SYNTAX: array.reduce((acc,currentValue)=>{},initialValue)
// acc is the accumulator
// curr is the current value
// initialValue is the initial value of the accumulator
// reduce takes two arguments


const sum=nums.reduce((acc,curr)=>{
    console.log(`acc is ${acc} and curr is ${curr}`)
    return acc+curr
},0) // 0 is the initial value of the accumulator
console.log(sum) // 6

// Another example
const shoppingCart=[
    {
        product:"phone",
        price:700
    },
    {
        product:"screen protector",
        price:10
    },
    {
        product:"case",
        price:20
    }
]

const total=shoppingCart.reduce((acc,curr)=>{
    return acc+curr.price
},0)
console.log(total) // 730