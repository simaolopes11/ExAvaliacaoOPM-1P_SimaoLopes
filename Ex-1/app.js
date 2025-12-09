let popup = "Olá Mundo!"
alert(popup)

let nome = prompt("Insere o teu nome")
alert("Olá " + nome)

let escolhaUtilizador = prompt("Escolhe um dos teus artistas multimédia de eleição.")
let resposta = "Não conheço a/o nome! Eu gosto muito da Mileece: https://www.mileece.is/bio"
alert(resposta)

let aceitar = prompt("“Esta página é um arquivo de artistas multimédia. Pretendes continuar? Responde 1 caso sim, ou 0 caso não")
Number(aceitar)

if (aceitar === "1") {
    alert("Perfeito! Sendo assim coloca o seguinte link na tua barra de navegador: https://www.mileece.is/bio")
} else if (aceitar === "0") {
    alert("Okay! Sendo assim fica para a próxima!")
}