const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");

const Moves = {
    X: {
        move: "rock",
        point: 1,
        wins: "scissors",
        loses: "paper",
    },
    Y: {
        move: "paper",
        point: 2,
        wins: "rock",
        loses: "scissors",
    },
    Z: {
        move: "scissors",
        point: 3,
        wins: "paper",
        loses: "rock",
    },
};

const opponentMapping = {
    A: "X",
    B: "Y",
    C: "Z",
};

const moveToLetterMapping = {
    rock: "X",
    paper: "Y",
    scissors: "Z",
};

const getOutcome = (playerA, playerB) => {
    let score = 0;

    if (playerB.move === playerA.loses) {
        score += 6;
    } else if (playerB.move === playerA.move) {
        score += 3;
    } // else loses

    score += playerB.point;
    return score;
};

const games = file.split("\n");

/* solution 1 */
const totalScore = games.reduce((totalScore, game) => {
    const [moveA, moveB] = game.split(" ");

    const playerA = Moves[opponentMapping[moveA]];
    const playerB = Moves[moveB];

    return (totalScore += getOutcome(playerA, playerB));
}, 0);

/* solution 2 */
const totalScorePart2 = games.reduce((totalScore, game) => {
    const [moveA, desiredOutcome] = game.split(" ");

    const playerA = Moves[opponentMapping[moveA]];
    let playerB = null;

    if (desiredOutcome == "Y") {
        playerB = playerA;
    } else if (desiredOutcome == "Z") {
        playerB = Moves[moveToLetterMapping[playerA["loses"]]];
    } else if (desiredOutcome == "X") {
        playerB = Moves[moveToLetterMapping[playerA["wins"]]];
    }

    return (totalScore += getOutcome(playerA, playerB));
}, 0);

console.log(totalScorePart2);
