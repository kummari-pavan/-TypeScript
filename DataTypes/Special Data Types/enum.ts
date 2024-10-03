// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
enum Color { 
    Red, 
    Green, 
    Blue 
}
let backgroundColor: Color = Color.Blue;

enum Status { 
    Success, 
    Failure, 
    Pending 
}
let currentStatus: Status = Status.Pending;

enum Color {
    Red1 = 10,
    Green2 = 20,
    Blue3 = 30
  }


// Custom Values:
// You can assign custom values to each enum member. If a value is not explicitly defined, TypeScript will continue the numbering from the last defined value.

enum Color {
  R= 10,
  G = 20,
  B= 30
}

// String Enums:
// TypeScript also supports string enums, where each enum member is explicitly assigned a string value.


enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
// In this case, Direction.Up will be "UP", Direction.Down will be "DOWN", and so on.
// Heterogeneous Enums:
// TypeScript allows you to mix string and numeric values in enums, though this is less common.

enum MixedEnum {
  No = 0,
  Yes = "YES"
}
// Use Cases of Enums:
// Status Codes: Enums are often used to represent various statuses (success, failure, pending, etc.).


enum Status {
  Success1 = 1,
  Failure1 = 0,
  Pending1 = -1
}


//Roles: In user management systems, enums can define roles (admin, user, guest, etc.).


enum Role {
  Admin,
  User,
  Guest
}
//Days of the Week: You can represent the days of the week using enums.


enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
//Traffic Lights: You can represent traffic light colors using enums.

enum TrafficLight {
  Red2 = "STOP",
  Yellow2 = "WAIT",
  Green2 = "GO"
}


// Full Example:
// Here’s a more detailed example where enums are used to control a simple program:


enum TrafficLight {
  Red = "STOP",
  Yellow = "WAIT",
  Green = "GO"
}

function getTrafficLightAction(light: TrafficLight): string {
  switch (light) {
    case TrafficLight.Red:
      return "You must stop!";
    case TrafficLight.Yellow:
      return "Get ready to move!";
    case TrafficLight.Green:
      return "You can go now!";
    default:
      return "Unknown traffic light!";
  }
}

let currentLight: TrafficLight = TrafficLight.Green;
console.log(getTrafficLightAction(currentLight));  // Output: You can go now!

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

// Example
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

//Example
enum CardinalDirections1 {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections1.North);
// logs 4
console.log(CardinalDirections1.West);


// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

// Example
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

// Example
enum CardinalDirections2 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);