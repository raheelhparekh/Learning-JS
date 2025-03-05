// push function takes an input and just adds to the end of an array

if(!Array.prototype.myPush){
    Array.prototype.myPush=function(...value){

        let length=this.length;
        for(let i=0;i<value.length;i++){
            this[length]=value[i];
            length++;
        }
        
    }
}

let arr=[1,2,3,4,5]
arr.push(5);
console.log(arr)

let arr2=[2,34,5,6,6]
arr2.myPush(4)
// console.log(arr2.length)
console.log(arr2)