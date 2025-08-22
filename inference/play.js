"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TYPE ANNOTATION = Explicitly defining the type
var counter;
// TYPE INFERENCE = It guesses the type based on the value
var newCounter = 0;
// console.log(typeof newCounter); // "number"
// Another example of type inference
// this is:
// function increment(counter: number) {
//   return counter++;
// }
// same as:
function increment(counter) {
    return counter++;
}
// console.log(typeof increment(5));
// best common type algorithms
var items = [1, 2, 3, null];
console.log(typeof items);
