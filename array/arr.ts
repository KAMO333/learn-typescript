// let skills: string[] = [];
// console.log(skills);

// // skills = ["Dev", "DevOps", "Cloud"];

// skills[0] = "Problem Solving";
// skills[1] = "Programming";

// skills.push("Software Design");

// skills.pop();

// console.log(skills);

// infers type as (string | number)[]
let scores = ["Programming", 5, "Software Design", 4];

// equivalent to:
let same_array: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];

console.log(scores);
