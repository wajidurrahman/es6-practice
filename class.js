class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(23, "Saju");
console.log(student1, student2,student3);