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

let numeroMinimo = 1; // Define o número mínimo.... nao esta funcionando direito.
let numeroMaximo = 10; // Define o número máximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Gera um número aleatório entre o Minimo e o Maximo
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre ${numeroMinimo} e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break; // Sai do loop se o chute estiver correto
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor. Tente novamente!");
        } else {
            alert("O número secreto é maior. Tente novamente!");
        }
        tentativas++;
    }
}       

    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Você acertou o número secreto [ ${numeroSecreto} ] em ${tentativas} ${palavraTentativas} !`);

    // if (tentativas == 1) {
    //     alert("Nossa! Acertou de primeira !!!! Você é vidente?");
    // } else {
    //     alert(`Você acertou o número secreto [ ${numeroSecreto} ] em ${tentativas} tentativas!`);
    // }