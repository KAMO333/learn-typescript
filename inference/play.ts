export {};

// TYPE ANNOTATION = Explicitly defining the type

let counter: number;

// TYPE INFERENCE = It guesses the type based on the value

let newCounter = 0;

console.log(typeof newCounter);

// Another example of type inference

// this is:
// function increment(counter: number) {
//   return counter++;
// }

// same as:
function increment(counter: number): number {
  return counter++;
}

console.log(typeof increment(5));
