"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
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
var name = "John";
var age = 25;
var counter = 1;
var active = true;
console.log("I'm ".concat(name, " and am ").concat(age, " old and am i active? ").concat(active, " for how this long ").concat(counter));
