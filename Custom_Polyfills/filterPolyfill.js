// iterated through entire array and returns a new array for the ones which works based on the filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(cb){
        let result=[]
        for(let i=0;i<this.length;i++){
            flag=cb(this[i],i);
            if(flag==true){
                result.push(this[i])
            }
        }
        return result;
    }
}


let arr=[1,2,3,4,5]
let newArr=arr.filter((val)=> val%2==0)
console.log(newArr)

let arr2=[1,2,3,4,5]
let newArr2=arr2.myFilter((val)=>val%2==0)
console.log(newArr2)