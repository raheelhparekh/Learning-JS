// When u write a custom polyfill first define signature ki kya karta he forEach basically.
// array ka har element pe ek callback run karta he
if(!Array.prototype.myForEach){
    Array.prototype.myForEach=function(cb){
        for(let i=0;i<this.length;i++){
            cb(this[i],i);
        }

    }

}

const arr=[1,2,3,4,5]

// arr.forEach();
arr.myForEach((value,index) => console.log(`At index: ${index} value: ${value}`));