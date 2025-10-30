// Importando a biblioteca
const leia = require('readline-sync');

let salariob, adcnoturno, hrextras, descontos

salariob = leia.questionFloat (" Salario Bruto: ")
adcnoturno = leia.questionFloat ("Adicional Noturno: ")
hrextras = leia.questionFloat ("Horas Extras: ")
descontos = leia.questionFloat ("Descontos: ")

let salariol = (salariob+ adcnoturno+ hrextras * 5- descontos)
console.log ("Salario Líquido: " + salariol)
