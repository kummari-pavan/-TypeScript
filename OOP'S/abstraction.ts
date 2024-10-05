// Abstraction is one of the fundamental principles of OOP that focuses on hiding the internal details of an object and exposing only the 
// essential features. It allows you to work with concepts at a high level, without worrying about how they are implemented.

// The idea of abstraction is to create a blueprint for objects that define what they should do but not how they do it. The implementation of 
// those details is left to the subclasses. This is achieved using abstract classes or interfaces.

// Why Use Abstraction?
// Simplifies complexity by focusing only on relevant aspects.
// Encapsulates implementation details so they can be changed without affecting how the user interacts with the object.
// Promotes reusability and maintainability.

//********* abstract Noun :-my mind wants fly on sky

//example1:
abstract class Institute{
    abstract training():boolean;
    abstract placement():boolean;
}
class FWDPython extends Institute{

    private status : boolean;
    constructor(status:boolean){
        super();
        this.status=status;
    }
    training():boolean{
         return this.status
    }
    placement():boolean{
        return this.status
   }
}



//example 2
abstract class shapee{
    abstract calculateArea():number;

    abstract calculatePerimeter():number;
}

class Circle extends shapee{
    private radius:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }

    calculateArea(): number {
        return Math.PI*this.radius*this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
      }
}

class Rectangleeeee extends shapee{
    private wi:number;
    private he:number;

    constructor(width: number, height: number) {
        super();
        this.wi = width;
        this.he = height;
      }
    
      // Implementing the calculateArea method for Rectangle
      calculateArea(): number {
        return this.wi * this.he;
      }
    
      // Implementing the calculatePerimeter method for Rectangle
      calculatePerimeter(): number {
        return 2 * (this.wi + this.he);
      }
}

const myCircle = new Circle(5);
console.log("Circle Area:", myCircle.calculateArea());          
console.log("Circle Perimeter:", myCircle.calculatePerimeter());

const myRectangle = new Rectangleeeee(10, 20);
console.log("Rectangle Area:", myRectangle.calculateArea());          
console.log("Rectangle Perimeter:", myRectangle.calculatePerimeter()); 

// Abstract Class Shape:
// --------------------
// This class is abstract because it doesn’t provide concrete details of how to calculate the area or perimeter for a shape. It only defines what a shape must do: it must have methods calculateArea() and calculatePerimeter().
// We cannot create an instance of Shape directly because it is abstract.
// Subclass Circle:
// This class extends Shape and provides the concrete implementation of calculateArea() and calculatePerimeter() specifically for a circle using the radius.
// Subclass Rectangle:
// This class extends Shape and implements how to calculate the area and perimeter for a rectangle using its width and height.
// Polymorphism and Abstraction:
// Both Circle and Rectangle inherit the abstract methods from Shape but provide their own specific implementations for those methods.
// The user (or the developer) doesn’t need to know the specific details of how area or perimeter is calculated. They only need to know that every shape has these abilities (thanks to the abstraction).