class Parent {
    constructor(){
        this.fatherName = "SchwerZnegger"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
       return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("tom")
console.log(baby.getFullName());
console.log(baby2);

//  Object-oriented programming (OOP) :- 1/ Inheritance.. 2/ implementation.  3/Polymorphism.
