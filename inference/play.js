"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TYPE ANNOTATION = Explicitly defining the type
var counter;
// TYPE INFERENCE = It guesses the type based on the value
var newCounter = 0;
console.log(typeof newCounter);
// Another example of type inference
function increment(counter) {
    return counter++;
}
console.log(typeof increment(5));
