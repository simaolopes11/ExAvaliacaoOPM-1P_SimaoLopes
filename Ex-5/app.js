let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

let popup = "Olá Mundo! Adivinha o número em que estou a pensar. Tens 6 tentativas!"
alert(popup)

let adivinhar = prompt("Insere um número entre 1 e 10")

let tentativas = 6

adivinhar = Math.floor(Number(adivinhar))

let acertou = false

if (adivinhar) {
    alert("Tem de ser um número inteiro! Mas vou processar a tua resposta, porque gosto do Inverno.")
}
if (adivinhar > 10 || adivinhar <= 0) {
    alert("Esse número não é válido, recomeça.")

} else {
    for (i = 1; i < 6; i++) {

        if (numeroSorte === adivinhar) {
            alert("Certo!!!")
            acertou = true
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 2 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 2) {
            alert("Quase lá!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10:")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert("Muito abaixo!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10:")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte < adivinhar) {
            alert("Muito acima!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 10:")
            adivinhar = Math.floor(Number(adivinhar))
        }
    }
}





