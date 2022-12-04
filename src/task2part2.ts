function task2part2() {

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

        const losingMove: { [key: string]: string } = {
            "A": "Z",
            "B": "X",
            "C": "Y",
        }

        let round = line.trim().split(" ");
        if (round.length !== 2) {
            return;
        }
        switch(round[1]){
            case "X":
                score += shapeScore[losingMove[round[0]]];
                break;
            case "Y":
                score += shapeScore[tieMove[round[0]]];
                score += 3;
                break;
            case "Z":
                score += shapeScore[winningMove[round[0]]];
                score += 6;
                break;
        }
    })
    return score;
}

console.log(task2part2());