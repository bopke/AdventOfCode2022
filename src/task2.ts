function task2() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task2.txt", 'utf-8');

    let score = 0;
    fileContent.split("\n").forEach((line: string) => {

        const shapeScore: { [key: string]: number } = {
            "X": 1,
            "Y": 2,
            "Z": 3,
        }

        const winningMove: { [key: string]: string } = {
            "A": "Y",
            "B": "Z",
            "C": "X",
        }

        const tieMove: { [key: string]: string } = {
            "A": "X",
            "B": "Y",
            "C": "Z",
        }

        let round = line.trim().split(" ");
        if (round.length !== 2) {
            return;
        }
        score += shapeScore[round[1]];
        if (winningMove[round[0]] === round[1]) {
            score += 6;
        } else if (tieMove[round[0]] === round[1]) {
            score += 3;
        }
    })
    return score;
}

console.log(task2());