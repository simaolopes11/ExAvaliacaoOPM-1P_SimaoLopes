let popup = "Olá Mundo! Vamos fazer contas simples."
alert(popup)


let operacao = prompt("Que operação desejas realizar? (soma, subtração, multiplicação, divisão)")


if (operacao === "soma" || operacao === "Soma" || operacao === "SOMA" || operacao === "subtração" || operacao === "Subtração" || operacao === "SUBTRAÇÃO" || operacao === "multiplicação" || operacao === "Multiplicação" || operacao === "MULTIPLICAÇÃO" || operacao === "divisão" || operacao === "Divisão" || operacao === "DIVISÃO") {
} else {
    alert("Operação inválida!")
}

let simbolo

let numeroesq = Number(prompt("Insere o número à esquerda da operação:"))
let numerodir = Number(prompt("Insere o número à direita da operação:"))

let resultado

if (operacao == 'soma' || operacao == 'Soma' || operacao == 'SOMA') {
    simbolo = "+"
    resultado = numeroesq + numerodir
} else if (operacao == 'subtração' || operacao == 'Subtração' || operacao == 'SUBTRAÇÃO') {
    simbolo = "-"
    resultado = numeroesq - numerodir
} else if (operacao == 'multiplicação' || operacao == 'Multiplicação' || operacao == 'MULTIPLICAÇÃO') {
    simbolo = "x"
    resultado = numeroesq * numerodir
} else if (operacao == 'divisão' || operacao == 'Divisão' || operacao == 'DIVISÃO') {
    simbolo = "/"
    resultado = numeroesq / numerodir
}

let resolucao = `${numeroesq} ${simbolo} ${numerodir} = ${resultado}`

console.log(resolucao)
alert(resolucao)
