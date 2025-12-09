let numeroSorte = Math.random() * 10 + 1
numeroSorte = Math.floor(numeroSorte)

let popup = "Olá Mundo! Adivinha o número em que estou a pensar."
alert(popup)

let adivinhar = prompt("Insere um número entre 1 e 100")

adivinhar = Math.floor(Number(adivinhar))

let acertou = false

if (adivinhar > 100 || adivinhar <= 0) {
    alert("Esse número não é válido, recomeça.")
} else {
    while (!acertou) {

        if (numeroSorte === adivinhar) {
            alert("Certo!!!")
            acertou = true
        } else if (numeroSorte > adivinhar && numeroSorte - adivinhar <= 5 || numeroSorte < adivinhar && adivinhar - numeroSorte <= 5) {
            alert("Quase lá!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte > adivinhar) {
            alert("Muito abaixo!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(adivinhar))
        } else if (numeroSorte < adivinhar) {
            alert("Muito acima!!!")
            adivinhar = prompt("Adivinha o número da sorte, entre 1 e 100:")
            adivinhar = Math.floor(Number(adivinhar))
        }
    }
}