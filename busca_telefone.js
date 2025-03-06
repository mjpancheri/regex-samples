import { readFileSync } from 'fs'
const bancoCsv = 'database.csv'
const banco = readFileSync(bancoCsv, "utf-8")

const patternTelefone = /\(\d+\)\s\d+-\d+/g

const matchTelefone = banco.match(patternTelefone)
console.log(matchTelefone);

const patternCelular = /\(\d{2}\)\s\d{5}-\d{4}/g

const matchCelular = banco.match(patternCelular)
console.log(matchCelular);