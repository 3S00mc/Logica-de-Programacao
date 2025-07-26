alert("Bem vindo ao jogo do número secreto!");
var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
alert("O número secreto é um inteiro entre 0 e 10. Você tem " + tentativas + " tentativas para adivinhá-lo.");
while (tentativas > 0) {
    var chute = parseInt(prompt("Digite o seu palpite:"));
    if (chute < 0 || chute > 10) {
        alert("Por favor, digite um número entre 0 e 10.");
        continue;
    }
    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
        break;
    } else {
        tentativas--;
        if (tentativas > 0) {
            alert("Errado! Você ainda tem " + tentativas + " tentativas.");
        } else {
            alert("Você perdeu! O número secreto era: " + numeroSecreto);
        }
    }
}
alert("Obrigado por jogar!");