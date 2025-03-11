/* signature : The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
*/
/*
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
*/

let arr=[1,2,3,4]
let initial=2;
const sum=arr.reduce((acc,curr)=>acc+curr,initial)
const sum2=arr.reduce((acc,curr)=>acc+curr)

console.log(`sum without initial value 2 : `, sum2) 
console.log(`sum with initial value 2 :`, sum)


if(!Array.prototype.myReduce){
    Array.prototype.myReduce=function(cb,initialValue=undefined){
        if(!initialValue){
            let acc=this[0]
            for(let i=1;i<this.length;i++){
                acc=cb(acc,this[i])
            }
            return acc
        }
        else{
            let acc=initialValue
            for(let i=0;i<this.length;i++){
                acc=cb(acc,this[i])
            }
            return acc
        }

    }
}

let result=arr.myReduce((acc,curr)=> acc+curr)
let initialValue=2
let result2=arr.myReduce((acc,curr)=> acc+curr,initialValue)
console.log(`Custom my reduce sum without initial value 2 : `, result)
console.log(`Custom my reduce sum with initial value 2 : `, result2)