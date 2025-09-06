// Example of a tuple in TypeScript
// let skill: [string, number];
// skill = ["Programming", 5];
// console.log(`Skill: ${skill[0]}, Level: ${skill[1]}`);
// Example of a tuple representing RGB color values
// let color: [number, number, number] = [255, 0, 0];
// console.log(`RGB Color: (${color[0]}, ${color[1]}, ${color[2]})`);
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log("Background Color: rgba(".concat(bgColor[0], ", ").concat(bgColor[1], ", ").concat(bgColor[2], ", ").concat(bgColor[3], ")"));
console.log("Header Color: rgb(".concat(headerColor[0], ", ").concat(headerColor[1], ", ").concat(headerColor[2], ")"));
console.log(bgColor);
console.log(headerColor);
