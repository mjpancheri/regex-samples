import { readFileSync } from 'fs'
const nomePagina = 'pagina.html'
const pagina = readFileSync(nomePagina, "utf-8")

// const patternH1H2 = /<(h[1|2])[^>]*>(.*?)<\/(h[1|2])>/gm
const patternH1H2 = /<(h[1|2])[^>]*>(.*?)<\/\1>/gm

const matchH1H2 = pagina.match(patternH1H2)
console.log(matchH1H2);
