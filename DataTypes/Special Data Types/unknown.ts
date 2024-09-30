// The unknown type is used when you do not know the type of a value in advance but want to ensure that proper type-checking occurs before
// you use that value. Think of it as a more restrictive any. You can assign anything to unknown, but you can’t do much with it until you
// know its type.

// Differences Between any and unknown:
// any allows any operation on the value without checks. It is more flexible but less safe.
// unknown requires you to first perform type checks before performing any operations.

let valueAny: any;
valueAny = 123;
valueAny = "Hello";

let valueUnknown: unknown;
valueUnknown = 123;
valueUnknown = "Hello";

// Example 2: Operations on any and unknown
// any allows operations without checks:

let valueAny1: any = "Hello";
console.log(valueAny.toUpperCase());  // Works, prints: "HELLO" 

//unknown requires type checking:

let valueUnknown1: unknown = "Hello";
// console.log(valueUnknown.toUpperCase());  // Error: Object is of type 'unknown'

if (typeof valueUnknown1 === "string") {
  console.log(valueUnknown1.toUpperCase());  // Works, prints: "HELLO"
}