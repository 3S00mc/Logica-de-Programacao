// alert("Bem vindo ao jogo do número secreto!");
//  let numeroSecreto = 42;
//  let chute = prompt("Digite um número entre 1 e 100");

//  if(chute == numeroSecreto) {
//     // alert("Parabéns! Você acertou o número secreto!");
//     console.log("Parabéns! Você acertou o número secreto!");
//  }

//SEGUNDO CODIGO
// let mensagemBoasVindas =  "Bem vindo ao App!";
// alert(mensagemBoasVindas);

//TERCEIRO CODIGO
// alert("Bem vindo ao jogo do número secreto!")
// let chute = prompt("Escolha um número entre 1 e 10")
// let numeroSecreto = 4
// if(chute == numeroSecreto) {
//     alert("Acertou")
// }

// QUARTO CODIGO
// let senhaDoSistema = "senhaTeste!"

// let senha = prompt("Digite a senha do sistema:")

// if (senha == senhaDoSistema){
//     alert("Acesso ao sistema garantido")
// }

// DESAFIO_1
// alert("Bem vindo ao nosso site!");

// let nome = "Lua";
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// console.log(nome, idade, numeroDeVendas, saldoDisponivel);

// alert("Erro! Preencha todos os campos obrigatórios!");

// let mensagemdeErro = "Erro! Preencha todos os campos obrigatórios!"
// alert(mensagemdeErro);

let nomeUsuario = prompt("Qual o seu nome?");
alert("Bem vindo ao nosso site, " + nomeUsuario + "!" + " Estamos felizes em tê-lo conosco!");

let idadeUsuario = prompt("Qual a sua idade?");

if (idadeUsuario >= 18) {
    alert("Você é maior de idade, " + nomeUsuario + " e já pode dirigir!");
    alert("O que gostaria de fazer hoje?");
}else {
    alert("Você é menor de idade e precisa de permissão para acessar o site!");
    alert("Obrigado! Espero te ver em breve!");
}

