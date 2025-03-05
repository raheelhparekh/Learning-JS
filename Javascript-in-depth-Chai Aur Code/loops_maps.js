const numbers = [1, 2, 3, 4, 5];

const addedNumbers = numbers.map((num) => {
    return num + 1;
})
console.log(addedNumbers) // [2, 3, 4, 5, 6]


const num = [1, 2, 3, 4, 5];


// Chaining in maps
const newNum=num
            .map((n)=> n+10) // [11, 12, 13, 14, 15]
            .map((n)=> n*2)  // [22, 24, 26, 28, 30]
            .filter((n)=> n>24) // [26, 28, 30]

console.log(newNum) // [26, 28, 30]