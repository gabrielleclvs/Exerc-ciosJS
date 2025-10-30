// Importando a biblioteca
const leia = require('readline-sync');

let nome, idade, primeiraDoacao;

nome = leia.question("Digite o Nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
primeiraDoacao= leia.question("Primeira doacao de sangue?: ")

if(primeiraDoacao == "true"){
    primeiraDoacao = true
}else if (primeiraDoacao == "false"){
    primeiraDoacao = false
}

if (idade >=18 && idade <= 59){
    console.log( nome +" está apta para doar sangue!")
}else if (idade >= 60 && idade <= 69 && primeiraDoacao == false){
    console.log( nome +" está apta para doar sangue!")
}else if (idade < 18 || idade > 69){
    console.log( nome +" nao está apta para doar sangue!")
}else if (idade >=60 && idade <= 69 && primeiraDoacao == true){
    console.log( nome +" nao está apta para doar sangue!")
}