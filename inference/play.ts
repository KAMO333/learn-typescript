export {};

// TYPE ANNOTATION = Explicitly defining the type

let counter: number;

// TYPE INFERENCE = It guesses the type based on the value

let newCounter = 0;

// console.log(typeof newCounter); // "number"

// Another example of type inference

// this is:
// function increment(counter: number) {
//   return counter++;
// }

// same as:
// function increment(counter: number): number {
//   return counter++;
// }

// console.log(typeof increment(5));

// best common type algorithms

let items = [1, 2, 3, null];

console.log(typeof items);
