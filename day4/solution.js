const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");

const pairs = file.split("\n");

function solution1() {
    let fullyContainedPairs = 0;

    for (const pair of pairs) {
        const [elfOne, elfTwo] = pair.split(",");
        const [elfOneRangeStart, elfOneRangeEnd] = elfOne.split("-");
        const [elfTwoRangeStart, elfTwoRangeEnd] = elfTwo.split("-");

        const firstPairCheck =
            parseInt(elfOneRangeStart, 10) <= parseInt(elfTwoRangeStart, 10) &&
            parseInt(elfOneRangeEnd, 10) >= parseInt(elfTwoRangeEnd, 10);

        const secondPairCheck =
            parseInt(elfTwoRangeStart, 10) <= parseInt(elfOneRangeStart, 10) &&
            parseInt(elfTwoRangeEnd, 10) >= parseInt(elfOneRangeEnd, 10);

        if (firstPairCheck || secondPairCheck) {
            fullyContainedPairs++;
        }
    }

    return fullyContainedPairs;
}

function solution2() {
    let allContainedPairs = 0;

    for (const pair of pairs) {
        const [elfOne, elfTwo] = pair.split(",");
        const [elfOneRangeStart, elfOneRangeEnd] = elfOne.split("-");
        const [elfTwoRangeStart, elfTwoRangeEnd] = elfTwo.split("-");

        if (
            Math.max(elfOneRangeStart, elfTwoRangeStart) <=
            Math.min(elfOneRangeEnd, elfTwoRangeEnd)
        ) {
            allContainedPairs++;
        }
    }

    return allContainedPairs;
}

console.log(solution2());
