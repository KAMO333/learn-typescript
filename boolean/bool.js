"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let pending: boolean;
// pending = true;
// // after a while
// // ..
// pending = false;
// NOT operator
var pending = true;
var notPending = !pending; // false
console.log(notPending); // false
var hasError = false;
var completed = true;
// AND operator
var result = completed && hasError;
console.log(result); // false
// OR operator
var results = completed || hasError;
console.log(results); // true
