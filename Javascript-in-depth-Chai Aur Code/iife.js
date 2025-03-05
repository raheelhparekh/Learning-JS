// Immediately Invoked Function Expression (IIFE)
// global scope ke pollution se bachne ke liye IIFE ka use hota hai. global scope pollution matlab ki agar hum kisi variable ka naam same rakh rahe hain jo ki kisi aur file me bhi hai toh usse conflict ho sakta hai. isliye IIFE ka use hota hai.

(function iifenamed(){
    // named IIFE function
    console.log(`DB CONNECTED`);
})(); // semi colon is necessary here


// arrow function IIFE
((name)=>{
    console.log(`hello ${name}`);

})("raheel"); //hello raheel



// this is the same function as above but we are using the above one to make the code more readable
function iife(){
    console.log("DB CONNECTED");
} 
iife(); //DB CONNECTED