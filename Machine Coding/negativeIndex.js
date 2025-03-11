let arr=[1,2,3,4,5,6,7]
console.log(arr[-1]) // prints undefined

// it should print a value INSTEAD of undefined. how will you do this??


function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index=Number(prop)

            if(index<0){
                return target[target.length + index]

            }

            return target[index]
        },
        set(target,prop,value){
            const index=Number(prop)
            if(index<0){
                target[target.length + index]=value

            }
            else{
                target[index]=value
            }
            return true;
        }
    })
}

let proxyArr=negativeIndex(arr)
console.log(proxyArr[-2]) // will return 6 
console.log(arr[-2]) // undefined

// setting the value
proxyArr[-3]=100
console.log(proxyArr) // [1,2,3,4,100,6,7]
console.log(arr) // [1,2,3,4,100,6,7] . Note the original array also changes when proxied array change
