"use strict";

function task1part2(): number {
    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task1.txt", 'utf-8');

    let sum = 0;
    let calories: number[] = []
    fileContent.split("\n").forEach((line: string) => {
        if (line.trim().length === 0) {
            calories.push(sum)
            sum = 0;
            return;
        }
        sum += parseInt(line);
    });

    const top3 = calories.sort((a, b) => b - a).slice(0, 3);
    return top3.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(task1part2());