// basically debouncing is like a USE CASE 
// **Debouncing Concept**
/* Example
   bache ko 5 sec baad chocolate milega. if voh bacha 5 sec se pehle mang leta he chocolate toh uska 5 sec will again start from beginning. eventually her 5sec will only be completed if she keeps quiete for proper 5 sec. if she speaks before 5 sec , then timer will again start for 5 secs

   USE CASE. suppose user wants to search mango in search bar of google. he is typing man and the api call is made for man, but he wanted to search mango. so he types go and then mango api call is made. so basically the last result call is made.
*/

// **How Debouncing Works in This Code:**
// - `debouncing(fn, delay)`: This function takes a function `fn` and a delay time.
// - It returns a new function that manages a timer (`myId`).
// - If the returned function is called again within the delay period, 
//   the previous timer is cleared using `clearTimeout(myId)`.
// - A new timer (`setTimeout`) is started, which executes `fn` after `delay` 
// - As a result, the function `fn` only runs once after the last call, 
//   preventing unnecessary repeated executions.

function debouncing(fn,delay){
    // console.log(arguments) // { '0': 'raheel', '1': 100 }

    let myId;
    return function(...args){
        clearTimeout(myId) // initially first time it is undefined
        myId=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

// **Why Use `apply(this, args)` Instead of `call` or `bind`?**
// - `apply(this, args)`: we can give the context as well as pass on the arguments. thats y `apply`
//   We use `apply(this, args)` because:
// - It ensures that `fn` is executed with the correct `this` reference (important in class methods).
// - It allows passing multiple arguments dynamically as an array, which is useful when 
//   the function being debounced has varying parameters.


// one("raheel",100)

function greet(name){
    console.log(`hello: ${name}`)
}

const run=debouncing2(()=>greet("raheel"),3000)


// Calling the function multiple times within 3 seconds
run()
run()
run()

// Output (after 3 seconds, only last one runs ):
// hello: raheel

// another way to write a debounced function
function debouncing2(fn,delay){
    let myId;
    return function(){
        clearTimeout(myId) // initially first time it is undefined
        myId=setTimeout(fn,delay)
    }
}