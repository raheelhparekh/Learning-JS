// When u write a custom polyfill first define signature ki kya karta he forEach basically.
// array ka har element pe ek callback run karta he
if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(cb){
        for(let i=0;i<this.length;i++){
            cb(this[i],i);
        }
    }
}

// since each time diffferent array would be passed. the THIS keyword will dynamically change based on the input. THIS points out to current context. First time this points to arr, second time THIS points to the arr2

const arr=[1,2,3,4,5]
// arr.forEach();
arr.myForEach((value,index) => console.log(`At index: ${index} value: ${value}`));


const arr2=[1,5,3,4,5,6,7]
arr2.myForEach((value,index)=> console.log(`Index : ${index} Value : ${value}`));