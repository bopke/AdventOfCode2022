function task3() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task3.txt", 'utf-8');

    let score = 0;
    fileContent.split("\n").forEach((line: string) => {
        line = line.trim();
        if (line.length === 0) {
            return;
        }
        const first_compartment = new Set(line.substring(0, line.length / 2));
        const second_compartment = new Set(line.substring(line.length / 2, line.length));
        for (const element of first_compartment) {
            if ([...second_compartment].includes(element)) {
                if (element.toUpperCase() === element) {
                    score += element.charCodeAt(0) - "A".charCodeAt(0) + 27;
                } else {
                    score += element.charCodeAt(0) - "a".charCodeAt(0) + 1;
                }
            }
        }
    })
    return score;
}

console.log(task3());