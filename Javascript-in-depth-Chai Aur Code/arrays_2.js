console.log(Array.isArray("Raheel")) // asking is it an array or not
console.log(Array.from("Raheel")) // returns an array of characters ["R","a","h","e","e","l"]

console.log(Array.from({name:"Raheel"})) // returns an empty array [] 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)) // returns an array of scores [100,200,300]
