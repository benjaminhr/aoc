const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");

const gnomes = file.split("\n\n");

const calories = gnomes.map((section) => {
    const currentCalories = section.split("\n").map((x) => parseInt(x, 10));
    const sum = currentCalories.reduce((a, b) => a + b, 0);
    return sum;
});

const sortedCalories = calories.sort((a, b) => b - a);

const topThree = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];

console.log(topThree);
