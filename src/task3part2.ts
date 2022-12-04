function task3part2() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task3.txt", 'utf-8');

    let score = 0;
    let lines = [] as Set<string>[];
    let readLinesCount = 0;
    fileContent.split("\n").forEach((line: string) => {
        line = line.trim();
        if (line.length === 0) {
            return;
        }
        if (readLinesCount === 3) {
            readLinesCount = 1;
            lines = [new Set(line)];
        } else {
            readLinesCount++;
            lines.push(new Set(line));
        }
        if (readLinesCount < 3) return;

        let filtered = lines.reduce((previous, current) => {
            return new Set([...previous].filter(value => [...current].includes(value)))
        }, lines[0])
        for (const element of filtered) {
            if (element.toUpperCase() === element) {
                score += element.charCodeAt(0) - "A".charCodeAt(0) + 27;
            } else {
                score += element.charCodeAt(0) - "a".charCodeAt(0) + 1;
            }
        }
    })
    return score;
}

console.log(task3part2());