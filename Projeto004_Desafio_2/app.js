// Projeto004_Desafio_2/app.js

//CODIGO 1 - DIA DA SEMANA
// let nomeUsuario = prompt("Bom dia! Qual é o seu nome?");
// let diaSemana = prompt("Oi " + nomeUsuario + ", que dia da semana é hoje?");

// if(diaSemana === "Sábado" || diaSemana === "Domingo") {
//     alert("Bom final de semana!");
// }else{
//     alert("Está muito longe para o final de semena????");
// }
//O código roda se eu clicar em cancelar.... e pega valores em branco.


//CODIGO 2 - VALORES POSITIVOS OU NEGATIVOS
// let numero = prompt ("Digite um número qualquer:");
// if (numero >= 0){
//     alert ("O número " + numero + " é positivo!");
// }else{
//     alert("O número " + numero + " é negativo!");
// }

//CODIGO 3 - SALDO NA CONTA
let saldo = 1000;
let valorSaque = prompt(`Seu saldo é de R$ ${saldo} Qual o valor quer retirar?`);
if (valorSaque <= saldo){
    saldo -= valorSaque;
    alert(`Saque realizado com sucesso! Seu novo saldo é de R$ ${saldo}`);
}else{
    alert("Saldo insuficiente para realizar o saque!");
    alert(`Seu saldo atual é de R$ ${saldo}`);
}