function task4part2() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task4.txt", 'utf-8');

    let result = 0;
    fileContent.split("\n").forEach((line: string) => {
        line = line.trim();
        if (line.length === 0) {
            return;
        }
        const ranges = line.split(",");
        const first_range = ranges[0].split("-");
        const second_range = ranges[1].split("-");
        if ((parseInt(first_range[0]) > parseInt(second_range[1])) ||
            (parseInt(first_range[1]) < parseInt(second_range[0])) ||
            (parseInt(first_range[1]) < parseInt(second_range[0])) ||
            (parseInt(first_range[0]) > parseInt(second_range[1]))) {
            return;
        }
        result++;
    })
    return result;
}

console.log(task4part2());