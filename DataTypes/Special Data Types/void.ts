// What is void?
// In TypeScript, the void type is used to indicate the absence of any value. It’s most commonly used as the return type of functions that 
// don’t return anything. When a function performs an action but doesn't explicitly return a value, you declare its return type as void.

// When to Use void?
// You use void when you don’t expect a function to return any meaningful value, for example, when you're logging something or performing 
// side effects.

//Example 1: Function with void

function logMessage(message: string): void {
  console.log(message);  // The function performs a side effect (logging) but doesn't return anything
}

logMessage("Hello, Pavan!");  // Logs "Hello, Pavan!" but returns nothing

//logMessage has a void return type, meaning it doesn't return any value.

// Example 2: Function with Return Value
// To contrast with void, a function that returns a value will have a specific return type.

function add(a: number, b: number): number {
  return a + b;  // Returns a number
}
const result = add(5, 10);  // result is 15
//The add function returns a number, so its return type is number, not void.