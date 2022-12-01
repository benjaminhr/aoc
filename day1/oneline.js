const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");

/* for fun */
const gnomes = file
    .split("\n\n")
    .map((section) =>
        section
            .split("\n")
            .map((x) => parseInt(x, 10))
            .reduce((a, b) => a + b, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);

console.log(gnomes);
