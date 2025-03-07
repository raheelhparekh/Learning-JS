class Person{
    constructor(fname,lname){
        this.first_name=fname
        this.last_name=lname
    }

    getFullName(){
        return `${this.first_name}  ${this.last_name}`
    }
}
// method of creating multiple objects with this syntax.    

const p1=new Person("Raheel","Parekh") // this points to a new location in heap. eg OX1
const p2=new Person("Hitesh","PAREKH") // this also points to another location in heap. eg OX2

console.log(p1.getFullName())
console.log(p2.getFullName())