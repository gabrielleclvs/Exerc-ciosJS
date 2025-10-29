// Importando a biblioteca
const leia = require('readline-sync');

let salario, abono;

salario = leia.questionFloat("Digite o Salario: ")
abono = leia.questionFloat("Digite o Abono: ")

let novoSalario = salario + abono;

console.log("O novo Salário é $"+ novoSalario)

