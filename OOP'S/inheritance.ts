// Inheritance allows one class to inherit properties and methods from another class. In TypeScript, this is done using the extends keyword.
// 1.Reusing code and avoiding duplication.
// 2.Structuring code hierarchically.
// 3.Extending functionality easily.
// 4.Enabling polymorphism for flexible, varied behavior.
// 5.Reducing maintenance costs by centralizing code in the superclass.

//simpe Example

class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    makeSound():void{
        console.log("Animal Sounds");
    }

}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    makeSound(): void {
        console.log("Bow Bow");
    }
}
const dog = new Dog("puppy");
dog.makeSound();  // Output: Bow Bow

//---------------------------------------------------------------------------------------------------------------

// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

//Example
interface Shape {
  getArea: () => number;
}

class Rectanglee implements Shape {
  public constructor(protected readonly widthh: number, protected readonly heightt: number) {}

  public getArea(): number {
    return this.widthh * this.heightt;
  }
}

//---------------------------------------------------------------------------------------------------------------

//A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
    // Inheritance: Extends
    // Classes can extend each other through the extends keyword. A class can only extends one other class.
    
    // Example

    interface Shape {
      getArea: () => number;
    }
    
    class Rectangleee implements Shape {
      public constructor(protected readonly wid: number, protected readonly heig: number) {}
    
      public getArea(): number {
        return this.wid * this.heig;
      }
    }
    
    class Square extends Rectangleee {
      public constructor(wid: number) {
        super(wid, wid);
      }
    
      // getArea gets inherited from Rectangle
    }