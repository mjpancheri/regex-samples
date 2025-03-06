import { readFileSync } from 'fs'
const bancoCsv = 'database.csv'
const banco = readFileSync(bancoCsv, "utf-8")

const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm

const matchData = banco.match(patternData)
console.log(matchData);
