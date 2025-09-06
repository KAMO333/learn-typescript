// Example of a tuple in TypeScript

// let skill: [string, number];
// skill = ["Programming", 5];

// console.log(`Skill: ${skill[0]}, Level: ${skill[1]}`);
// Example of a tuple representing RGB color values
// let color: [number, number, number] = [255, 0, 0];

// console.log(`RGB Color: (${color[0]}, ${color[1]}, ${color[2]})`);

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log(
  `Background Color: rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, ${bgColor[3]})`
);
console.log(
  `Header Color: rgb(${headerColor[0]}, ${headerColor[1]}, ${headerColor[2]})`
);

console.log(bgColor);
console.log(headerColor);
