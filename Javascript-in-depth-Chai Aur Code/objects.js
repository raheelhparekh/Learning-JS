// singleton object --> constructor se banega object toh singleton object
// Object.create() --> object banega
// const js=new Object(); // this is singleton object


//object literal

const js={
    name: 'Raheel',
    age: 21,
    location: 'Karachi'
} // this is how to declare object


// function in object
js.greeting=function(){
    console.log('Hello'); //Hello
}

js.greeting2=function(){
    console.log(`Hello ,${this.name}`); //Hello ,Raheel
}

console.log(js.greeting())
console.log(js.greeting2())