export {};

// let pending: boolean;
// pending = true;
// // after a while
// // ..
// pending = false;

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError;
console.log(result); // false

// OR operator
let results = completed || hasError;
console.log(results); // true
