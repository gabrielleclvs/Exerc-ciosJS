// Importando a biblioteca
const leia = require('readline-sync');

let n1= leia.questionFloat("Nota 1: ")
let n2= leia.questionFloat("Nota 2: ")
let n3= leia.questionFloat("Nota 3: ")
let n4= leia.questionFloat("Nota 4: ")

let media = (n1+n2+n3+n4)/4

console.log("Média final: " + media)
