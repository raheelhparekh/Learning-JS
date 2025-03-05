const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };

// concatenating 2 objects
//console.log((obj3 = Object.assign({}, obj1, obj2))); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

// using spread operator to merge
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

// database se object kese aata he yeh dekh ab

const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Doe",
  },
];

console.log(users[1].name); //Jane
