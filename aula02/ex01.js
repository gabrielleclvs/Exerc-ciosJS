// Importando a biblioteca
const leia = require('readline-sync');

let A, B, C 

A= leia.questionInt("Digite o numero A: ")
B= leia.questionInt("Digite o numero B: ")
C= leia.questionInt("Digite o numero C: ")

let soma= A+B;

if(soma > C){
    console.log("A Soma de A + B é MAIOR que C")
}else if (soma < C){
    console.log("A Soma de A + B é MENOR que C")
} else{
    console.log ("A Soma de A + B é IGUAL a C")
}



