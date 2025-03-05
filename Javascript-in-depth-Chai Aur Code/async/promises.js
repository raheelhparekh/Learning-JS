// promise banaya resolve reject parameters 
const promiseOne=new Promise(function(resolve,reject){
    // Do an async call
    // DB calls, crypto calls, network
    setTimeout(function(){
        console.log("async call 1");
        resolve(); // resolve ko .then() se connect karna padta
    },1000)
    
});

// promise consume karna he ab
promiseOne.then(function(){
    console.log("promiseOne consumed");
});


// ------------------------------------------------
// another way to consume promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async call 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promiseTwo consumed");
});



// ------------------------------------------------
// promise 3 with data
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async call 3");
        resolve({username:"raheel", age: 20});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
});


// ------------------------------------------------
// promise 4 with error and chaining
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"raheel", password: "1234"});
        }
        else{
            reject("ERROR: something went wrong");
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("promiseFour done");
});

// ------------------------------------------------
// promise 5 with async await

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript", password: "javascript"});
        }
        else{
            reject("ERROR:JS WENT WRONG");
        }
    },1000)
});
async function consumePromise(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromise();