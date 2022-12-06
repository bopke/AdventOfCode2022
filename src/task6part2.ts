function task6part2() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task6.txt", 'utf-8')

    let queue: string[] = [];
    let n = 0;
    [...fileContent]
        .every((char: string) => {
            if (queue.length < 13) {
                n++;
                queue.push(char);
                return true;
            }
            n++;
            queue.push(char);
            let onlyUnique = true;
            for (let i = 0; i < 14; i++) {
                for (let j = 0; j < i; j++) {
                    if (queue[j] == queue[i]) {
                        onlyUnique = false;
                    }
                }
            }
            if (onlyUnique) {
                return false;
            }
            queue.shift();
            return true;
        })

    return n;
}

console.log(task6part2());