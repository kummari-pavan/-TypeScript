// The never type represents values that never occur. It's a type that indicates that something is impossible in the context of your program. 
// You can think of it as the type for things that shouldn't happen.

// Example 1: Functions that Throw Errors
// A function that throws an error will never return a value. Therefore, its return type is never.

function throwError(message: string): never {
  throw new Error(message);  // This function never returns
}

throwError("Something went wrong!");


// Example 2: Infinite Loops
// A function that enters an infinite loop will never finish execution, so its return type is also never.

function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}

// Example 3: Exhaustive Switch-Case with never
// When using switch statements or exhaustive type checks, never helps ensure that all possible cases are handled.

type Shape = "circle" | "square" | "triangle";

function getShapeArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 3.14 * 2 * 2;
    case "square":
      return 4 * 4;
    case "triangle":
      return (5 * 6) / 2;
    default:
      const _exhaustiveCheck: never = shape; // This will throw a TypeScript error if a new shape is added but not handled
      return _exhaustiveCheck;
  }
}
// In the default case, the never type ensures that if a new shape is added to the Shape union (like "rectangle"), TypeScript will raise an 
// error until it's handled in the switch statement. This makes your code more robust by enforcing exhaustiveness.