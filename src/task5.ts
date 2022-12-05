function task5() {

    const fs = require('fs');
    const fileContent = fs.readFileSync("inputs/task5.txt", 'utf-8')
        .split("\n")
        .filter((line: string) => line.length > 1);

    let stacksRaw = [] as string[][];
    fileContent
        .filter((line: string) => !line.includes("move"))
        .forEach((line: string) => {
            for (let i = 0; i < line.length; i++) {
                if (stacksRaw[i] === undefined) stacksRaw.push([]);
                stacksRaw[i].push(line[i]);
            }
        })
    let stacks = stacksRaw
        .map((stack: string[]) => stack.reverse())
        .filter((stack: string[]) => !isNaN(parseInt(stack[0])))
        .map((stack: string[]) => stack.join(""))
        .map((stack: string) => stack.slice(1))
        .map((stack: string) => stack.trim())
        .map((stack: string) => [...stack]);

    const number_regex = /(\d+)/g;
    fileContent.filter((line: string) => line.includes("move")).forEach((line: string) => {
        const matches = line.match(number_regex)!;
        const amount = parseInt(matches[0]);
        const source = stacks[parseInt(matches[1])-1];
        const destination = stacks[parseInt(matches[2])-1];
        for (let i = 0; i < amount; i++) {
            destination.push(source.pop()!);
        }
    });
    return stacks.reduce((accumulator:string,element:string[])=>accumulator+=element.at(-1),"");
}

console.log(task5());