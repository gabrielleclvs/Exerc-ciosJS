// Importando a biblioteca
const leia = require('readline-sync');

let n1= leia.questionFloat("Digite o numero1:")
let n2= leia.questionFloat("Digite o numero2:")
let n3= leia.questionFloat("Digite o numero3:")
let n4= leia.questionFloat("Digite o numero4:")

let diferenca = (n1 * n2) - (n3 * n4);
console.log("Diferença: " + diferenca);
