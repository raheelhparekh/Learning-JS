class A{
    funcInsideA(){
        console.log(`I am function A`)
    }
}

class B{
    funcInsideB(){
        console.log(`I am function B`)
    }
}

const obj=new B()
obj.funcInsideB()
obj.funcInsideA() // error bcoz it cant access class A.

// if we want to access class A.
// we will have to create an object const obj2= new A()

// BUT The catch is call funcInsideA without using const obj2= new A()
// now comes EXTENDS keyword into implementation

class B extends A{
    funcInsideB(){
        console.log(`I am function B`)
    }
}

const obj3=new B()
obj3.funcInsideB() // prints I am function B
obj3.funcInsideA() // prints I am function A



// basically by using EXTENDS keyword the internal thing happening here is __proto__ of class B is equal to __proto__ of class A
// so if interviewer says call funcInsideA without using EXTENDS keyword. u just need to write

class B{
    funcInsideB(){
        console.log(`I am function B`)
    }
}
B.prototype=Object.create(A.prototype)

const b=new B()
B.funcInsideA()
B.funcInsideB()