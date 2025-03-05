// loops in objects FOR IN

const obj={
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++'
}
for(let key in obj){
    console.log(`${key} shortcut is : ${obj[key]}`)
}


// loops in arrays FOR IN

const arr=['JavaScript','Python','Ruby','C++']
for(let index in arr){
    console.log(`Index ${index} : ${arr[index]}`)
}

// syntax of for each loop
const coding=['JavaScript','Python','Ruby','C++'];

coding.forEach(function(item){ // syntax` forEach(function(item){})`
    console.log(item)
})

//similarly using arrow function
coding.forEach((item)=>{
    console.log(item)
})

// another way of using for each loop
function print(item){
    console.log(item)
}
coding.forEach(print) // passing reference of function

coding.forEach((item,index)=>{
    console.log(`Index ${index} : ${item}`)
})


// Real world loops where we have array of objects generally

const myCoding=[
    {
        name:'JavaScript',
        type:'Frontend',

    },
    {
        name:'Python',
        type:'Backend',

    },
    {
        name:'Ruby',
        type:'Backend',

    }
]

myCoding.forEach((item)=>{
    console.log(item.name) 
    console.log(item.type)
})