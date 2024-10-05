// TypeScript Classes

// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.

class Person{
    name:string
}
const Person1=new Person();
Person1.name="Pavan";


class student{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    introduce(){
        return `I am &{this.name} and My age &{this.age}`
    }
}

let stu1=new student("Pavan",22);
stu1.introduce()