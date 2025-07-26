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


// QUINTO CODIGO
// alert("Bem vindo ao jogo do número secreto!");

// let numeroSecreto = 42;
// let chute = prompt("Digite um número entre 1 e 100");

// console.log(numeroSecreto);

// if (chute == numeroSecreto){
//     alert(`Parabéns! Você acertou o número secreto [ ${numeroSecreto} ]`);
// }else{
//     alert("Que pena! Você errou.");
// }


// SEXTO CODIGO
// alert("Bem vindo ao jogo do número secreto!");
// let numeroSecreto = 42;
// let chute = prompt("Digite um número entre 1 e 100");

// if (chute == numeroSecreto) {
//     alert(`Parabéns! Você acertou, o número é [ ${numeroSecreto} ]`);
// } else {
//         if (chute > numeroSecreto) {
//             alert("O número secreto é menor. Tente novamente!");
//         } else {
//             alert("O número secreto é maior. Tente novamente!");
//         }
// }  


// // SÉTIMO CODIGO
// alert("Bem vindo ao jogo do número secreto!");

// let numeroSecreto = 42;
// let chute;

// while (chute != numeroSecreto) {
//     chute = prompt("Digite um número entre 1 e 100");
//     if (chute == numeroSecreto) {
//         alert("Parabéns! Você acertou o número secreto!");
//     } else {
//         if (chute > numeroSecreto) {
//             alert("O número secreto é menor. Tente novamente!");
//         }   else {
//             alert("O número secreto é maior. Tente novamente!");
//         }
//     }
// }


// OITAVO CODIGO
alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 42;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 e 100");
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto! Tentativas utilizadas: [ ${tentativas} ]`);
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor. Tente novamente!");
        } else {
            alert("O número secreto é maior. Tente novamente!");
        }
        tentativas++;
    }
}