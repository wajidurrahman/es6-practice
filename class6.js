class Student{

}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);


class Village{
    constructor(){
        this.id = 1;
        this.name = "mahi";
    }
}
const Village1 = new Village();
const Village2 = new Village();
console.log(Village1, Village2);


class Student1{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}
const student3 = new Student1(12, "Shuvo");
const student4 = new Student1(22, "mahiya");
const student5 = new Student1(23, "Saju");
console.log(student3.name, student4.name, student5.name);