// each element pe iterate karta he and performs an operation user specifies and returns it in a new array
// original array does not change

if(!Array.prototype.myMap){
    Array.prototype.myMap=function(cb){
        let result=[];

        for(let i=0;i<this.length;i++){
            new_val=cb(this[i],i);
            result.push(new_val); 
        }
        return result
    }
}



const arr=[1,2,3,4,5]
let newArr=arr.map((e)=> e*2);
console.log(newArr)


const arr2=[1,2,3,4,5]
let newArr2=arr2.myMap((e)=> e*3);
console.log(newArr2)