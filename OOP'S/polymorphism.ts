// "polymorphism" means "many forms", and it allows objects of different classes to be treated as objects of a common superclass. The key idea
//  is that the same method can behave differently based on the object that calls it.

// 1.Flexibility: You can write more flexible code that works with objects of different classes without needing to know the specific class at the time of writing.
// 2.Code Reusability: You can use the same interface (or superclass) and change only the specific behavior of certain methods in the subclass, which reduces redundancy.
// 3.Maintainability: The code becomes easier to maintain since changes are localized to specific subclasses without affecting other parts of the code.

// Method Overriding (Runtime Polymorphism): This allows a subclass to provide a specific implementation of a method that is already defined in 
// its superclass. The decision of which method to call is made at runtime, based on the actual object type, even if the object is referenced by
// a superclass type.


class Vehicle {
    move(): void {
      console.log("The vehicle is moving.");
    }
  }
  
  class Carrr extends Vehicle {
    override move(): void {
      console.log("The car is driving on the road.");
    }
  }
  
  class Bike extends Vehicle {
    override move(): void {
      console.log("The bike is riding on the track.");
    }
  }
  
  // Creating instances
  const myCarr = new Carrr();
  const myBike = new Bike();
  
  // Polymorphism in action
  myCarr.move();   // Output: The car is driving on the road.
  myBike.move();  // Output: The bike is riding on the track.


// Override
// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.

  interface Shape {
    getArea: () => number;
  }
  
  class Rectangles implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly w: number, protected readonly h: number) {}
  
    public getArea(): number {
      return this.w * this.h;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.w}, height=${this.h}]`;
    }
  }
  
  class Squaree extends Rectangles {
    public constructor(w: number) {
      super(w, w);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.w}]`;
    }
  }