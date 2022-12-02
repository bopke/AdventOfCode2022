"use strict";

function task1() {
    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task1.txt", 'utf-8');

    let sum = 0;
    let highestSum = 0;
    fileContent.split("\n").forEach((line: string) => {
        if (line.trim().length === 0) {
            if (highestSum < sum) {
                highestSum = sum;
            }
            sum = 0;
            return;
        }
        sum += parseInt(line);
    })
    if (highestSum < sum) {
        highestSum = sum;
    }
    return highestSum;
}

console.log(task1());