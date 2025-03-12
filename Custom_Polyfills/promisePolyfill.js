// this is how promises work
// function wait(seconds){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(),seconds*1000)
//     })
// }

// wait(5)
// .then(()=>console.log(`promise resolve hogaya`))
// .then(()=>console.log(`do this noww`))
// .catch(()=>console.log(`some error occured`))
// .catch(()=>console.log(` one more error occured`))
// .finally(()=>console.log(`yeh to run hoga hi`))


// promise signature
// jese promise banate ho ek executor function run karado
/* this is the executor functn we r referring to 
        (resolve,reject)=>{
            setTimeout(()=>resolve(),seconds*1000)
        }
*/
// executor functn has a resolve and reject
// if resolve is called , all .then is executed
// if reject is called , all .catch is called
// all, . finally runs everytime after resolve/reject

// this is our Custom Promise

class myCustomPromise{
    constructor(executor_function){
        this._state="pending"
        this._successCallback=[]
        this._rejectedCallback=[]
        executor_function(this.resolverFunctn.bind(this),this.rejectorFunctn.bind(this))


    }

    then(cb){
        if(this._state="fulfilled"){
            cb();
            return this
        }
        this._successCallback.push(cb)
        return this
    }
    catch(cb){
        if(this._state="rejected"){
            cb();
            return this
        }
        this._rejectedCallback.push(cb)
        return this
    }
    finally(cb){
        this._successCallback.push(cb)
        this._rejectedCallback.push(cb)
        return this

    }

    resolverFunctn(){
        this._state="fulfilled"
        this._successCallback.forEach((cb)=>cb())
        
    }

    rejectorFunctn(){
        this._state='rejected'
        this._rejectedCallback.forEach((cb)=>cb())
    }

}

function wait(seconds){
    const p=new myCustomPromise((resolve,reject)=>{
        setTimeout(()=>resolve(),seconds*1000)
    })
    return p
}

wait(5)
.then(()=>console.log(`promise resolve hogaya`))
.then(()=>console.log(`do this noww`))
.catch(()=>console.log(`some error occured`))
.catch(()=>console.log(` one more error occured`))
.finally(()=>console.log(`yeh to run hoga hi`))
.finally(()=>console.log(`yeh to run hoga hi dusri bar`))