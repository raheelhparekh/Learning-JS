let person1 = {
  name: "raheel",
  greet: function () {
    console.log(`hello ${this.name}`); // now here this keyword is used for context, there can be multiple name, but this.name will refer the name in the current cotext ie: raheel
  },
};

let person2 = {
  name: "hitesh",
};

// PROBLEM: now i want to call person 1 ka function greet but name should be of person 2. 
// bcoz context me changes kar rhe isiliye call & bind karna pad rha he
// you can do it using "call"

person1.greet.call(person2); // hello hitesh

// "bind" returns a new function
const binded = person1.greet.bind(person2);
console.log(binded()); // hello htesh
