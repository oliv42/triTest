import { open } from "node:fs/promises";

const file = await open("./text.txt");
let algo = [];
let i = 0;

for await (const line of file.readLines()) {
    let agloToAdd = {};
    agloToAdd.id = i;
    agloToAdd.name = line.trim();
    const regex = /(\((.*?)\))/;
    agloToAdd.nameId = line.match(regex)[2].replaceAll(" ", "_");

    algo.push(agloToAdd);

    i++;
}

console.log(algo);
