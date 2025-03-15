/*
Throttling me its like kid is aksed to wait for 10 seconds. even if she asks again before 10 seconds still only after 10 seconds completed then she will get her chocolate. even if she request multiple time in between she will only get chocolate after completion.

USE CASE
this concept is applied , suppose user is clicking a button continuosly even after pressing it once. the api call will be done only once even if the button is continuosly being pressed by the user
*/
function throttling(fn,delay){

    let myId=null;
    return function(...args){
        if(myId===null){
            fn(...args)
            myId=setTimeout(()=>{
                myId=null
            },delay)
        }
    }
}

function greet(name){
    console.log(`hello: ${name}`)
}

const run=throttling(()=>greet("raheel"),3000)

run();
run();
run()