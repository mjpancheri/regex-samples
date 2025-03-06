import { readFileSync } from 'fs'
const bancoCsv = 'database.csv'
const banco = readFileSync(bancoCsv, "utf-8")

const patternNome = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm

const matchNome = banco.match(patternNome)
console.log(matchNome);
