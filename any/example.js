// Example of using 'any' type in TypeScript
// let result: any;
// result = 1;
// console.log(result);
// result = "Hello";
// console.log(result);
// result = [1, 2, 3];
// const total = result.reduce((a: number, b: number) => a + b, 0);
// console.log(total);
// json may come from a third-party API
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
// parse JSON to find location
var currentLocation = JSON.parse(json);
console.log(currentLocation.x);
