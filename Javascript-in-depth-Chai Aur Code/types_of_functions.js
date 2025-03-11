
// function declaration
function add(a,b){
    return a+b
}


// function expression
const subtract=function(a,b){
    return a-b
}


// arrow function
const multiply=(a,b)=>{
    return a*b
}


// first class function
function applyOperation(x,y,operation){
    return operation(x,y)
}
const result=applyOperation(4,5,(x,y)=>x/y)


// IIFI; immediately invoked function expression
(function(){
    console.log("raheel")
})()