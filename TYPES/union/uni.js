// // Function that adds two numbers or concatenates two strings
// function add(a: any, b: any) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }
//   if (typeof a === "string" && typeof b === "string") {
//     return a.concat(b);
//   }
//   throw new Error("Parameters must be numbers or strings");
// }
// console.log(add(true, false)); // 5
// // console.log(add("Hello, ", "world!")); // "Hello, world!"
// let result: number | string;
// result = 10; // OK
// result = "Hi"; // also OK
// // result = false; // a boolean value, not OK
// console.log(result);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
}
console.log(add(true, false)); // 0
console.log(add("Hello, ", "world!")); // "Hello, world!"
