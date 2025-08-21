export {};

/** USAGE:
let variableName: type;
let variableName: type = value;
const constantName: type = value;
 */

// CORRECT
// let counter: number;
// counter = 1;

// console.log(counter);

// // INCORRECT
// let counter: number;
// counter = "Hello";

// console.log(counter); // compile error

// PRIMITIVE ANNOTATIONS

// let name: string = "John";
// let age: number = 25;
// let counter: number = 1;
// let active: boolean = true;

// console.log(
//   `I'm ${name} and am ${age} old and am i active? ${active} for how this long ${counter}`
// );

// Type annotation examples

// USAGE:
// let arrayName: type[];

let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

console.log(names);

let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25,
};

console.log(person);
