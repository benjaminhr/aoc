const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const bags = file.split("\n");

const getPriority = (char) => {
    if (char === char.toUpperCase()) {
        return alphabet.indexOf(char.toLowerCase()) + 27;
    } else {
        return alphabet.indexOf(char) + 1;
    }
};

/* solution 1 */
const priorities = bags.map((bag) => {
    const firstPart = bag.slice(0, bag.length / 2);
    const secondPart = bag.slice(bag.length / 2, bag.length);

    const commonChar = firstPart
        .split("")
        .find((character) => secondPart.includes(character));

    return getPriority(commonChar);
});

const total = priorities.reduce((sum, x) => sum + x, 0);

/* solution 2 */
const chunkArray = (arr, size) =>
    arr.length > size
        ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
        : [arr];

const groups = chunkArray(bags, 3);
const newPriorities = groups.map((group) => {
    const commonChar = group[0].split("").find((char) => {
        return (
            group[0].includes(char) &&
            group[1].includes(char) &&
            group[2].includes(char)
        );
    });

    return getPriority(commonChar);
});

const newTotal = newPriorities.reduce((sum, x) => sum + x, 0);
console.log(newTotal);
