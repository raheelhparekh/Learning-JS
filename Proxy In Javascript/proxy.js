const user={
    name:"Raheel",
    age:21,
    password:"1234"
}

// now i want to create an anohter object but i dont want that object to store my password value.
// we can here create proxy of this object with restriction we want
// SYNTAX : const proxy1 = new Proxy(target, handler1);
/* SYNTAX :
    const handler1 = {
        get(target, prop, receiver) {
            return "world";
        },
    };
*/
// the "name", "password", "age" --> PROPS
// user object --> target

const proxyUser=new Proxy(user,{
    get(target,prop){
        console.log(prop);
        if(prop!="password"){
            return target[prop]
        }
        else{
            console.log("access denied")
        }
    }
})

console.log(user.password)
console.log(proxyUser.password) // now you cannot access password in proxyUser  