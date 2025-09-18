const student1={
    roll:1,
    name: "yusd"
    branch: "ds",
    section: "c"
}
const student2={
    roll:2,
    name: "yud"
    branch: "cs",
    section: "c"
}
console.log(student1);
console.log(student2);

class Student{
    constructor(roll, name, branch, section){
        this.roll = roll;
        this.name  = name;
        this.branch =  branch;
        this.section = section;
    }
}
const  student3 = new  Student(3,"av", "ds", "c");
console.log(student3);
